//En este archivo tambien tengo que requerir express
const express = require("express");
//Guardo en la variable router toda la funcionalidad del metodo router que me va a permitir hacer toda la magia 
//Esto va  a permitir que se asocien todas las rutas con el prefijo pelicula 
const router = express.Router();

router.get("/:id", (req,res) =>{
    res.send(`Esta es el pelicula con el id ${req.params.id}` )
})



module.exports = router;
