const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UsuarioNegocioSchema = schema({
   nombre: {type: String, required: true},
   direccion: {type: String, required: true},
   email: {type: String, required:true, unique: true},
   descripcion: {type: String, required: true},
   calificacionPromedio: {type: Number, default: 0},
   comentarios: [{
    usuarioid: {type: mongoose.Schema.Types.ObjectId, ref: 'UsaurioCliente'},
    comentario: {type: String, required: true},
    calificacion: {type: Number, required: true}
   }] 
})

module.exports = mongoose.model("UsuarioNegocio_collections", UsuarioNegocioSchema)