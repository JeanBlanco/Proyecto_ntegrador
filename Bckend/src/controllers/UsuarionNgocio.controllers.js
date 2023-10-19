const UsuarioNegocio = require('../models/UsuarioNegocio')
const {check, validationResult} = require('express-validator')

exports.obtenerUsuarioNegocio = async (req, res) =>{
    try{
        const usuarioNegocio = await UsuarioNegocio.findOne({email: req.body.email})
        res.json(usuarioNegocio); 
    } catch (error){
        console.error(error.massage);
        res.status(500).send('Error en el servidor')
    }
}

//? Crear perfil negocio
exports.createProfileNegocio = async(req, res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        }); //? si hay errores, enviar una respuesta con los mensajes.
    }

    
    // Si no hay errores, intentar crear perfil.
    try{
        //obtener los datos del usuario desde el cuerpo de la petición.
        const {nombre,direccion, email,descripcion, contraseña} = req.body;

        let user = await user.findOne({email}); //? verificar si ya el usuario existe un usuariocon ese correo electronico.

        if (user){
            return res.status(400).json({msg:
            'Ya existe un usuario con ese correo electronico'});
            //*TODO: Si existe, enviar una respuesta con el mensaje anterior
        }

        user = new UsuarioNegocio({
            //? si no existe, crear un nuevo usuario
            nombre,
            direccion,
            email,
            descripcion,
            contraseña
        });

        await user.save(); // guardar el usuario en la base de datos

        res.status(201).json({
            msg:'Perfil creado correctamente'
        });
        //*TODO: se enviará este mensaje al cuando el registro sea exitoso
    } catch (error){
        console.error(error.message);
        res.status(500).json({msg:
            'Error al crear el perfil'
        });
        //*TODO: Si ocurre algún error, se enviará el mensaje anterior.
    };

}

// aCTUALIZAR perfil del negocio
exports.updateNegocio = async (req, res)=>{
    const {id} = req.params;
    const {nombre,direccion, email,descripcion, contraseña} = req.body;
try{
    const user = await  user.findByIdAndUpdate(id,{ nombre, direccion,email, descripcion, contraseña },{new: true});
    const negocioActualizado = {};
    if (nombre) negocioActualizado.nombre = nombre;
    if (direccion) negocioActualizado.direccion = direccion;
    if (email) negocioActualizado.email = email;
    if (descripcion) negocioActualizado.descripcion = descripcion;
    if (contraseña) negocioActualizado.contraseña = contraseña;

    
    let negocio = UsuarioNegocio.findById(req.params.id);

     // Actualizar las propiedades del negocio existente
    Object.assign(negocio, negocioActualizado);

     // Guardar los cambios en la base de datos
    await negocio.save();

    res.json(negocio);
} catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
}

}

//Eliminar negocio
exports.eliminarNegocio = async (req, res) => {
    try {
        let negocio = await UsuarioNegocio.findById(req.params.id);
        if (!negocio) return res.status(404).json({ msg: 'Negocio no encontrado' });
        await UsuarioNegocio .findByIdAndRemove(req.params.id);
        res.json({ msg: 'Negocio eliminado' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

// obtenr comentarios
exports.obtenerComentarios = async (req, res) => {
    try {
        const negocio = await UsuarioNegocio.findById(req.params.id).populate('comentarios.usuarioId', ['nombre']);
        if (!negocio) return res.status(404).json({ msg: 'Negocio no encontrado' });
        res.json(negocio.comentarios);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

// comentar
exports.crearComentario = async (req, res) => {
    try{
        const usuarioId = req.usuario.id;
        const { comentario, calificacion } = req.body;
        const nuevoComentario = {
        usuarioId,
        comentario,
        calificacion
    };

    let negocio = await UsuarioNegocio.findById(req.params.id);

    if (!negocio) return res.status(404).json({ msg: 'Negocio no encontrado' });

    negocio.comentarios.unshift(nuevoComentario);

    // Calcular la nueva calificación promedio del negocio
    let calificacionPromedioTotal = 0;
    for (let i=0; i<negocio.comentarios.length; i++) {
        calificacionPromedioTotal += negocio.comentarios[i].calificacion;
    }
    negocio.calificacionPromedio = calificacionPromedioTotal / negocio.comentarios.length;

    await negocio.save();

    res.json(negocio.comentarios);
    }catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

// Actualizar para actualizar comentario
exports.actualizarComentario = async (req, res) => {
    try{
        let negocio = await UsuarioNegocio.findById(req.params.id);

        // Encontrar el comentario a actualizar
        const comentarioId = req.params.comentarioId;
        let comentarioAActualizarIndex;
        for (let i = 0; i < negocio.comentarios.length; i++) {
            if (negocio.comentarios[i]._id == comentarioId) {
                comentarioAActualizarIndex = i;
                break;
            }
        }

        // Actualizar el comentario
        const { comentario, calificacion } = req.body;
        negocio.comentarios[comentarioAActualizarIndex].comentario = comentario;
        negocio.comentarios[comentarioAActualizarIndex].calificacion = calificacion;

        // Calcular la nueva calificación promedio
        let calificacionPromedio = 0;
        for (let i = 0; i < negocio.comentarios.length; i++) {
            calificacionPromedio += negocio.comentarios[i].calificacion;
        }

        calificacionPromedio /= negocio.comentarios.length;
        negocio.calificacionPromedio = calificacionPromedio;

        // Guardar los cambios en la base de datos
        await negocio.save();   

        res.json(negocio);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

// Eliminar comentario
exports.eliminarComentario = async (req, res) => {
    try{
        let negocio = await UsuarioNegocio.findById(req.params.id);
        // Encontrar el comentario a eliminar
        const comentarioId = req.params.comentarioId;
        let comentarioAEliminarIndex;
        for (let i = 0; i < negocio.comentarios.length; i++) {
            if (negocio.comentarios[i]._id == comentarioId) {
                comentarioAEliminarIndex = i;
                break;
            }
        }

        // Eliminar el comentario
        negocio.comentarios.splice(comentarioAEliminarIndex, 1);

        // Calcular la nueva calificación promedio
        let calificacionPromedio = 0;
        for (let i = 0; i < negocio.comentarios.length; i++) {
            calificacionPromedio += negocio.comentarios[i].calificacion;
        }

        calificacionPromedio /= negocio.comentarios.length;
        negocio.calificacionPromedio = calificacionPromedio;

        
        // Guardar los cambios en la base de datos
        await negocio.save();

        res.json(negocio);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}