const express = require ('express')
const mongoose = require ('mongoose')
require('dotenv').config()

const app = express();

// Constante del puerto del servidor 
const PORT = process.env.PORT || 3000;


//? Conección a la base de datos 




console.log("servidor conectado en el puerto " + PORT)

