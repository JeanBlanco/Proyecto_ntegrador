const mongoose = require('mongoose')
const schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UsuarioNegocioSchema = schema({
   usuario: {type: String, required: true},
   direccion: {type: String, required: true},
   email: {type: String, required:true, unique: true},
   descripcion: {type: String, required: true},
   fechaInauguracion:{type: String, required:true},
   nombrePropetario: {type: String, required: true},
   apellidoPropetario: {type: String, required: true},
   numerotelefono: {type: Number, required: true},
   run: {type: Number, required: true},
   nit: {type: String, required: true},
   contraseña: {type: String, required: true},
   calificacionPromedio: {type: Number, default: 0},
   comentarios: [{
      usuarioid: {type: mongoose.Schema.Types.ObjectId, ref: 'UsaurioCliente'},
      comentario: {type: String, required: true},
      calificacion: {type: Number, required: true}
   }]
});

UsuarioNegocioSchema.pre('save', async function(next){
   try{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.contraseña, salt);
      this.contraseña = hashedPassword;
      next();  
   }catch (error){
      next(error);
   }
})

module.exports = mongoose.model("UsuarioNegocio_collections", UsuarioNegocioSchema)