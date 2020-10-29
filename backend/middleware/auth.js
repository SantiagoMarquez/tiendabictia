//Modulo NodeJs
const jwt = require("jsonwebtoken");

//Creacion validacion para identificar el tendero logueado
function auth(req, res, next) {
  let jwtToken = req.header("Authorization");
  //Split al jwt
  jwtToken = jwtToken.split(" ")[1];
  //Si el token no existe
  if(!jwtToken) return res.status(405).send("No hay token de acceso");

  //Si el token existe
  try{
    const payload = jwt.verify(jwtToken, "clave");
    req.tendero = payload;
    next();
  } catch(error){
    res.status(405).send("Token sin autorizacion");
  }
}

//Exports
module.exports = auth;