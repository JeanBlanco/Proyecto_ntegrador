const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UsuarioClienteSchema = schema ({
    nombre: {type: String,required: true},
    email: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true}
})

module.exports = mongoose.model("UsuariClientes_collections", UsuarioClienteSchema)