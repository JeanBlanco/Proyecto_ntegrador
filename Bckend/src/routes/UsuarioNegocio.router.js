const express = require('express')
const UsuarioNegocioControllers = require('../controllers/UsuarionNgocio.controllers');
const {check,} = require('express-validator')

const api = express.Router();

api.get('/obtenerNegocio', UsuarioNegocioControllers.obtenerUsuarioNegocio);
api.post('/crear-perfilNegocio',[
    check('nombre', 'El nombre debe ser  obligatorio').not().isEmpty(),
    check('direccion', 'la dirireccion debe ser  obligatorio').not().isEmpty(),
    check('email', 'El correo electronico debe ser valido').isEmail(),
    check('descripcion', 'la descripcion debe ser  obligatorio').not().isEmpty(),
    check('contraseña', 'La contraseña debe tener al menos 8 caracteres').isLength({
        min: 8
    })
], UsuarioNegocioControllers.createProfileNegocio);
api.put('/updateNegocio:id', UsuarioNegocioControllers.updateNegocio);
api.delete('/deleteNegocio', UsuarioNegocioControllers.eliminarNegocio);
api.get('/obtener-comentario', UsuarioNegocioControllers.obtenerComentarios);
api.post('/comentar', UsuarioNegocioControllers.crearComentario);
api.put('/updateComentario:id', UsuarioNegocioControllers.actualizarComentario);
api.delete('/deleteComentario:id', UsuarioNegocioControllers.eliminarComentario);

module.exports = api;