const express = require('express')
const {check, validationResult} = require('express-validator')
const UsuarioClienteControllers = require('../controllers/UsusarioCliente.controllers')
const router = express.Router()

router.get('/usuarioCliente', UsuarioClienteControllers.obtenerUsuarioCliente);
//** Ruta para crear un perfil
router.post('/create-profile',[
    check('nombre', 'El nombre debe es obligatorio').not().isEmpty(),
    check('email', 'El correo electronico debe ser valido').isEmail(),
    check('contraseña', 'La contraseña debe tener al menos 8 caracteres').isLength({
        min: 8
    })], 
UsuarioClienteControllers.createProfile);
router.put('/users/:id', UsuarioClienteControllers.updateProfile);



module.exports =  router;
