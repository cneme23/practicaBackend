const express =  require("express");
const router = express.Router();

router.get("/contactos/:id", (req,res)=>{
   let idContacto =  req.params.id; 
    res.send( "Este es el listado de contactos elegido: " + idContacto )})

module.exports = router;