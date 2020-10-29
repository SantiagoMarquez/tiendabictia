//Modulos NodeJs
const express = require("express");
const router = express.Router();

//Modulos internos
const { Tendero } = require("../model/tendero");

//Ruta
router.post("/", async(req, res) => {
  let tendero = await Tendero.findOne({correo: req.body.correo});
  //Si no existe en db
  tendero = new Tendero({
    nombre: req.body.nombre,
    correo: req.body.correo,
    pass: req.body.pass
  })
  //Guardamos el tendero con jwt
  const result = await tendero.save();
  const jwtToken = tendero.generateJWT();
  res.status(200).send({jwtToken});
});

//Exports
module.exports = router;