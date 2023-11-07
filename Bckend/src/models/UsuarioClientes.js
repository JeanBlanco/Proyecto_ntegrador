const mongoose = require('mongoose')
const schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UsuarioClienteSchema = schema ({
    nombre: {type: String,required: true},
    apellido:{type: String, required: true},
    usuario: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true},
    fechaNacimiento : {type: Date, required: true},
    numeroTelefono: {type: Number, required: true},
    documentoId: {type: Number, required: true},
})

UsuarioClienteSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.contraseña, salt);
        this.contraseña = hashedPassword;
        next();  
    }catch (error){
        next(error);
    }

})

module.exports = mongoose.model("UsuariClientes_collections", UsuarioClienteSchema)
