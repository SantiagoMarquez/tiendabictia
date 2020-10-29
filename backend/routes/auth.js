//Modulos NodeJs
const express = require("express");
const router = express.Router();

//Modulos internos
const { Tendero } = require("../model/tendero");

//Ruta
router.post("/", async(req, res) =>{
  //Validar el correo
  const tendero = await Tendero.findOne({correo: req.body.correo});
  //Si no existe el correo
  if(!tendero) return res.status(400).send("Datos erroneos");
  //Si el password no existe
  if(tendero.pass !== req.body.pass) return res.status(400).send("Datos erroneos");
  //Generar jwt
  const jwtToken = tendero.generateJWT();
  res.status(200).send({jwtToken});
})

//Exports
module.exports = router;