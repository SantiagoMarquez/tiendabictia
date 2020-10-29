//Modulos internos
const mongoose = require("mongoose");

//Esquema
const EsquemaProducto = new mongoose.Schema({
  nombre: String,
  tipo: String,
  precio: Number,
  idTendero: String,
  fecha:{
    type: Date,
    default: Date.now
  }
});

//Exports
const Producto = mongoose.model("producto", EsquemaProducto);
module.exports.Producto = Producto;