const express = require('express')
const UsuarioNegocioControllers = require('../controllers/UsuarionNgocio.controllers');


const api = express.Router();

api.post('/crear-perfil', UsuarioNegocioControllers.crearPerfil);
api.post('/iniciar-sesion', UsuarioNegocioControllers.iniciarSesion);
api.get('/negocios', UsuarioNegocioControllers.obtenerNegocios);
api.put('/negocios/:id', UsuarioNegocioControllers.actualizarNegocio);
api.delete('/negocios/:id', UsuarioNegocioControllers.eliminarNegocio);

api.get('/negocios/:id/comentarios', UsuarioNegocioControllers.obtenerComentarios);
api.post('/negocios/:id/comentarios', UsuarioNegocioControllers.crearComentario);
api.put('/negocios/:id/comentarios/:comentarioId',UsuarioNegocioControllers.actualizarComentario);
api.delete('/negocios/:id/comentarios/:comentarioId', UsuarioNegocioControllers.eliminarComentario);

module.exports = api;