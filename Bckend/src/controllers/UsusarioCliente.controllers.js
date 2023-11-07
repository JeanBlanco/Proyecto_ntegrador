
const UsuarioCliente = require('../models/UsuarioClientes')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const UsuarioClienteControllers = {}


//*TODO: creación de función que valida los datos del usuario.
UsuarioClienteControllers.createProfile = async(req, res)=>{

    // Obtener los resultados de la validación. 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        }); //? si hay errores, enviar una respuesta con los mensajes.
    }

    try{
        //obtener los datos del usuario desde el cuerpo de la petición.
        const {nombre,apellido,usuario,email,contraseña, fechaNacimiento ,numeroTelefono,documentoId} = req.body;
        console.log(req.body)
        let user2 = await UsuarioCliente.findOne({email}); //? verificar si ya el usuario existe un usuariocon ese correo electronico.

        if (user2){
            return res.status(400).json({msg:
            'Ya existe un usuario con ese correo electronico'});
            //*TODO: Si existe, enviar una respuesta con el mensaje anterior
        }else{
            console.log(user2)

            user2 = new UsuarioCliente({
                //? si no existe, crear un nuevo usuario
                nombre,
                apellido,
                usuario,
                email,
                contraseña,
                fechaNacimiento,
                numeroTelefono,
                documentoId
            });
    
            await user2.save(); // guardar el usuario en la base de datos
    
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

UsuarioClienteControllers.obtenerUsuarioCliente = async (req, res) =>{
    try{
        const usuarioCliente = await UsuarioCliente.findOne({email: req.body.email})
        res.json(usuarioCliente);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('error del servidor');
    }
}

UsuarioClienteControllers.iniciarSesionCliente = async (req, res) => {
    // Obtener el email y la contraseña
    const email = req.body.email;
    const contraseña = req.body.contraseña;
    console.log(req.body)

    // Buscar el usuario por el email
    try {
    const usuario = await UsuarioCliente.findOne({ email: email });
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

//Actualizar perfil
UsuarioClienteControllers.updateProfileCliente = async(req,res)=>{
    try {
        const { nombre,apellido,usuario,contraseña,numeroTelefono } = req.body;
        const clienteActualizado = {};
        if (nombre) clienteActualizado.nombre = nombre;
        if (apellido) clienteActualizado.apellido = apellido;
        if (usuario) clienteActualizado.usuario = usuario;
        if (contraseña) clienteActualizado.contraseña = contraseña;
        if (numeroTelefono) clienteActualizado.numeroTelefono = numeroTelefono;
    

        
        let cliente = await UsuarioCliente.findById(req.params.id);

         // Actualizar las propiedades del negocio existente
        Object.assign(cliente,clienteActualizado);

         // Guardar los cambios en la base de datos
        await cliente.save();

        res.json(cliente);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
}

module.exports = UsuarioClienteControllers; 

