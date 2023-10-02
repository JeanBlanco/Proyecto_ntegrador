const express = require ('express')
const mongoose = require ('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const UsuarioCliente_Routes = require("./src/routes/UsuarioCliente.router")
const UsuarioNegocio_Routes = require("./src/routes/UsuarioNegocio.router")
const Catalogo_Routes = require("./src/routes/Catalogo.router")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors());

// Constante del puerto del servidor 
const PORT = process.env.PORT || 3000;


//? Conección a la base de datos
const MONGODB_URL=`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&authSource=admin`
mongoose.connect(MONGODB_URL,
    {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log("Conectado a la base de datos");
        app.listen(PORT, function(){ 
            console.log("Servidor Conectado en el puerto "+ PORT)
        });
    })
    .catch((err)=>{
        console.log(err)
        throw err;
    })

//respuesta del  servidor
app.get('/', (req,res)=>{
    res.send('Wlcome to my API')
})

app.use("/", UsuarioCliente_Routes)
app.use("/", UsuarioNegocio_Routes)
app.use("/", Catalogo_Routes)


module.exports = app;




