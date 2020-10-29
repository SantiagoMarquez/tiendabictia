//Modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema
const esquemaTendero = new mongoose.Schema({
  nombre: String,
  correo: String,
  pass: String,
  fechaRegistro:{
    type: Date,
    default: Date.now,
  }
});

//Generar jwt

esquemaTendero.methods.generateJWT = function (){
  return jwt.sign({
    _id: this._id,
    nombre: this.nombre,
    correo: this.correo
  },"clave")
};

//Exports
const Tendero = mongoose.model("tendero", esquemaTendero);
module.exports.Tendero = Tendero;