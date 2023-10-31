const express = require('express')
const{check} = require('express-validator')
const UsuarioNegocioControllers = require('../controllers/UsuarionNgocio.controllers');


const api = express.Router();

api.post('/crear-perfil', [
        check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
        check('direccion').notEmpty().withMessage('La dirección es obligatoria'),
        check('email').isEmail().withMessage('El email no es válido'),
        check('descripcion').notEmpty().withMessage('La descripción es obligatoria'),
        check('contraseña').isLength({ min: 10 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
        check('fechaInauguracion').notEmpty().withMessage('La fecha de inauguración debe ser una fecha válida'),
        check('nombrePropetario').notEmpty().withMessage('El nombre del propietario es obligatorio'),
        check('apellidoPropetario').notEmpty().withMessage('El apellido del propietario es obligatorio'),
        check('numerotelefono').isNumeric().withMessage('El número de teléfono debe ser numérico'),
        check('run').isNumeric().withMessage('El run debe ser numérico'),
        check('nit').notEmpty().withMessage('El nit es obligatorio'),
    ], UsuarioNegocioControllers.crearPerfil);
    
api.get('/negocios', UsuarioNegocioControllers.obtenerNegocios);
api.put('/negocios/:id', UsuarioNegocioControllers.actualizarNegocio);
api.delete('/negocios/:id', UsuarioNegocioControllers.eliminarNegocio);

api.get('/negocios/:id/comentarios', UsuarioNegocioControllers.obtenerComentarios);
api.post('/negocios/:id/comentarios', UsuarioNegocioControllers.crearComentario);
api.put('/negocios/:id/comentarios/:comentarioId',UsuarioNegocioControllers.actualizarComentario);
api.delete('/negocios/:id/comentarios/:comentarioId', UsuarioNegocioControllers.eliminarComentario);

module.exports = api;