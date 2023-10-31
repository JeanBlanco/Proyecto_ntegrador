
const UsuarioCliente = require('../models/UsuarioClientes')
const {validationResult} = require('express-validator')

const UsuarioClienteControllers = {}

// obtener usuario
UsuarioClienteControllers.obtenerUsuarioCliente = async (req, res) =>{
    try{
        const usuarioCliente = await UsuarioCliente.findOne({email: req.body.email})
        res.json(usuarioCliente);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('error del servidor');
    }
}


//*TODO: creación de función que valida los datos del usuario.
UsuarioClienteControllers.createProfile = async(req, res)=>{

    // Obtener los resultados de la validación. 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        }); //? si hay errores, enviar una respuesta con los mensajes.
    }

    // Si no hay errores, intentar crear perfil.
    try{
        //obtener los datos del usuario desde el cuerpo de la petición.
        const {nombre, email, contraseña, fechaNacimiento,numeroTelefono,  documentoId} = req.body;

        let user = await user.findOne({email}); //? verificar si ya el usuario existe un usuariocon ese correo electronico.

        if (user){
            return res.status(400).json({msg:
            'Ya existe un usuario con ese correo electronico'});
            //*TODO: Si existe, enviar una respuesta con el mensaje anterior
        }

        user = new UsuarioCliente({
            //? si no existe, crear un nuevo usuario
            nombre,
            email,
            contraseña,
            fechaNacimiento,
            numeroTelefono,
            documentoId
        });

        await user.save(); // guardar el usuario en la base de datos

        res.status(201).json({
            msg:'Perfil creado correctamente'
        });
        //*TODO: se enviará este mensaje al cuando el registro sea exitoso
    } catch (error){
        console.error(error.message);
        res.status(500).json({mensaje:
            'Error al crear el perfil'
        });
        //*TODO: Si ocurre algún error, se enviará el mensaje anterior.
    };
}
//Actualizar perfil
UsuarioClienteControllers.updateProfile = async(req,res)=>{
    const {id} = req.params;
    const {nombre, email, contraseña, numeroTelefono} = req.body;

    try{
        const user = await user.findByIdAndUpdate(id,{nombre,email,contraseña}, numeroTelefono,{new: true});
        const clienteActualizado = {};
        if (nombre) clienteActualizado.nombre = nombre;
        if (email) clienteActualizado.email = email;
        if (contraseña) clienteActualizado.contraseña = contraseña;
        if (numeroTelefono) clienteActualizado.numeroTelefono = numeroTelefono; 

        let Cliente = UsuarioCliente.findById(req.params.id);

        // Actualizar las propiedades del negocio existente
        Object.assign(Cliente, clienteActualizado);

       // Guardar los cambios en la base de datos
        await negocio.save();
        res.json(Cliente);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
        }
}

module.exports = UsuarioClienteControllers; 

