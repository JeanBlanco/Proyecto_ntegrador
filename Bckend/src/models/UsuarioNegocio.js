const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UsuaeioNegocioSchema = schema({
    id_negocio: Number,
    nommbre: String,
    direccion: String,
    email: String,
    contraseña: String,
    imagen: String,
    id_categoria: Number,
    nit: Number
})

module.exports = mongoose.model("UsuarioNegocio_collections", UsuaeioNegocioSchema)