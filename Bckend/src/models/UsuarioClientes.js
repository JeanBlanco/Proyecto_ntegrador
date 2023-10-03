const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UsuarioClienteSchema = schema ({
    id_usuario: {type: Number, required: true},
    nombre: {type: String,required: true},
    email: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true}
})

module.exports = mongoose.model("UsuariClientes_collections", UsuarioClienteSchema)