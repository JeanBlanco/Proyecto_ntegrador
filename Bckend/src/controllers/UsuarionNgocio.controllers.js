const UsuarioNegocio = require('../models/UsuarioNegocio')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const  UsuarioNegocioController = {}

// Metodo para crear  el perfil de un usuario negocio
UsuarioNegocioController.crearPerfil = async (req, res) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        }); //? si hay errores, enviar una respuesta con los mensajes.
    }

    // Si no hay errores, intentar crear perfil.
    try{
        //obtener los datos del usuario desde el cuerpo de la petición.
        const {usuario,direccion,email, descripcion,fechaInauguracion,nombrePropetario,apellidoPropetario, numerotelefono,run, nit,contraseña} = req.body;
        console.log(req.body)
        let user = await UsuarioNegocio.findOne({email}); //? verificar si ya el usuario existe un usuariocon ese correo electronico.

        if (user){
            return res.status(400).json({msg:
            'Ya existe un usuario con ese correo electronico'});
            //*TODO: Si existe, enviar una respuesta con el mensaje anterior
        }else{
            console.log(user)

            user = new UsuarioNegocio({
                //? si no existe, crear un nuevo usuario
                usuario,
                direccion,
                email,
                descripcion,
                fechaInauguracion,
                nombrePropetario,
                apellidoPropetario,
                numerotelefono,
                run,
                nit,
                contraseña
            });
    
            await user.save(); // guardar el usuario en la base de datos
    
            res.status(201).json({
                msg:'Perfil creado correctamente'
            });
            //*TODO: se enviará este mensaje al cuando el registro sea exitoso
        } 
    } catch (error){
        console.error(error.message);
        res.status(500).json({mensaje:
            'Error al crear el perfil'
        });
        //*TODO: Si ocurre algún error, se enviará el mensaje anterior.
    };
    
}

UsuarioNegocioController.iniciarSesion = async (req, res) => {
    // Obtener el email y la contraseña
    const email = req.body.email;
    const contraseña = req.body.contraseña;
    console.log(req.body)

    // Buscar el usuario por el email
    try {
    const usuario = await UsuarioNegocio.findOne({ email: email });
      // Verificar si el usuario existe o no
    if (!usuario) {
        // Enviar una respuesta con un mensaje de error
        res.status(404).json({
        mensaje: 'No se encontró el usuario con el email ' + email
        });
    } else {
        // Comparar la contraseña ingresada con la contraseña almacenada
        try {
        const result = await bcrypt.compare(contraseña, usuario.contraseña);
          // Verificar si el resultado de la comparación es verdadero o falso
        if (!result) {
            // Enviar una respuesta con un mensaje de error
            res.status(401).json({
            mensaje: 'La contraseña es incorrecta'
            });
        } else {
            // Generar un token de autenticación
            const token = jwt.sign({ usuario: usuario }, 'secret', { expiresIn: '1h' });

            // Enviar una respuesta con el token y el usuario
            res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            token: token,
            usuario: usuario
            });
        }
        } catch (err) {
          // Manejar el error si ocurre
        return res.status(500).json({
            mensaje: 'Error en el servidor',
            error: err
        });
        }
    }
    } catch (err) {
      // Manejar el error si ocurre
    return res.status(500).json({
        mensaje: 'Error en el servidor',
        error: err
    });
    }
};

UsuarioNegocioController.obtenerNegocios = async (req, res) => {
    try {
        const negocios = await UsuarioNegocio.find();
        res.json(negocios);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

UsuarioNegocioController.actualizarNegocio = async (req, res) => {
    try {
        const { usuario, direccion, descripcion,nombrePropetario,apellidoPropetario,numerotelefono,contraseña } = req.body;
        const negocioActualizado = {};
        if (usuario) negocioActualizado.usuario = usuario;
        if (direccion) negocioActualizado.direccion = direccion;
        if (descripcion) negocioActualizado.descripcion = descripcion;
        if (nombrePropetario) negocioActualizado.nombrePropetario = nombrePropetario;
        if (apellidoPropetario) negocioActualizado.apellidoPropetario = apellidoPropetario;
        if (numerotelefono) negocioActualizado.numerotelefono = numerotelefono;
        if (contraseña) negocioActualizado.contraseña = contraseña;
    

        
        let negocio = await UsuarioNegocio.findById(req.params.id);

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

UsuarioNegocioController.eliminarNegocio = async (req, res) => {
    try {
        let negocio = await UsuarioNegocio.findById(req.params.id);
        if (!negocio) return res.status(404).json({ msg: 'Negocio no encontrado' });
        await UsuarioNegocio.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Negocio eliminado' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

UsuarioNegocioController.obtenerComentarios = async (req, res) => {
    try {
        const negocio = await UsuarioNegocio.findById(req.params.id).populate('comentarios.usuarioId', ['nombre']);
        if (!negocio) return res.status(404).json({ msg: 'Negocio no encontrado' });
        res.json(negocio.comentarios);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

UsuarioNegocioController.crearComentario = async (req, res) => {
    try {
        const usuarioId = req.usuario.id;
        const { comentario, calificacion } = req.body;
        const nuevoComentario = {
            usuarioId,
            comentario,
            calificacion
        };
        
        let negocio = await UsuarioNegocio.findById(req.params.id);

        if (!negocio) return res.status(404).json({ mensaje: 'Negocio no encontrado' });

        negocio.comentarios.unshift(nuevoComentario);

         // Calcular la nueva calificación promedio del negocio
        let calificacionPromedioTotal = 0;
        for (let i=0; i<negocio.comentarios.length; i++) {
            calificacionPromedioTotal += negocio.comentarios[i].calificacion;
        }
        negocio.calificacionPromedio = calificacionPromedioTotal / negocio.comentarios.length;

        await negocio.save();

        res.json(negocio.comentarios);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

UsuarioNegocioController.actualizarComentario = async (req, res) => {
    try {
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

UsuarioNegocioController.eliminarComentario = async (req, res) => {
    try {
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


module.exports = UsuarioNegocioController;