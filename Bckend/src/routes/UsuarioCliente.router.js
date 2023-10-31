const express = require('express')
const {check} = require('express-validator')
const UsuarioClienteControllers = require('../controllers/UsusarioCliente.controllers')
const router = express.Router()

router.get('/usuarioCliente', UsuarioClienteControllers.obtenerUsuarioCliente);
//** Ruta para crear un perfil
router.post('/crear-usuario-cliente', [
    check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    check('usuario').notEmpty().withMessage('El usuario es obligatorio'),
    check('email').isEmail().withMessage('El email no es válido'),
    check('contraseña').isLength({ min: 10 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('fechaNacimiento').isDate().withMessage('La fecha de nacimiento debe ser una fecha válida'),
    check('numeroTelefono').isNumeric().withMessage('El número de teléfono debe ser numérico'),
    check('documentoId').isNumeric().withMessage('El documento de identidad debe ser numérico')
], UsuarioClienteControllers.createProfile);

router.put('/users/:id', UsuarioClienteControllers.updateProfile);



module.exports =  router;
