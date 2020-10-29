//Modulos NodeJs
const express = require("express");
const router = express.Router();

//Modulos internos
const { Producto }= require("../model/producto");
const { Tendero }= require("../model/tendero");
const auth = require("../middleware/auth");

//Ruta
router.post("/", auth, async(req, res) => {
  //Obtenemos el id del tendero
  const tendero = await Tendero.findById(req.tendero._id);
  //si el tendero no existe
  if(!tendero) return res.status(400).send("El usuario no existe");
  //si el tendero existe, se registra el producto
  const producto = new Producto({
    idTendero: tendero._id,
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    precio: req.body.precio,
  })
  //Envio de resultado
  const result = await producto.save();
  res.status(200).send(result)
})

//Exports
module.exports = router