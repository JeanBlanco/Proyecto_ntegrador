const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UsuarioClienteSchema = schema ({
    id_usuario: Number,
    nombre: String,
    email: String,
    contraseña: String
})

module.exports = mongoose.model("UsuariClientes_collections", UsuarioClienteSchema)