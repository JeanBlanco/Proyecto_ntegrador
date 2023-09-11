const mongoose = require('mongoose')
const schema = require('schema')

const CategoriaSchema = schema ({
    id_categoria: Number,
    nombre: String,
    descripcion: String,
    imagen: String,
})
module.exports = mongoose.model("Categoria_collections", CategoriaSchema)