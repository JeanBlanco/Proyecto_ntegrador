const express = require('express')
const UsuarioClienteControllers = require('../controllers/UsusarioCliente.controllers')
const router = express.Router()



router.post('/crear-usuario-cliente',UsuarioClienteControllers.createProfile);
router.post('/inicio_sesionC', UsuarioClienteControllers.iniciarSesionCliente)
router.get('/usuarioCliente', UsuarioClienteControllers.obtenerUsuarioCliente);
router.put('/users/:id', UsuarioClienteControllers.updateProfileCliente);



module.exports =  router;
