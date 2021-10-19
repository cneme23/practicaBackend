
const express = require("express");
const router = express.Router();


//Nota: Aca indico una de todas las rutas de directores, notese que NO hace falta colocar la "/directores" ya que eso fue subsanado por Router y el .use en el entry point
router.get("/:id/:nombre?", (req,res)=>{
    let director = req.params.nombre;
    if(director === undefined){
        res.send("Te falto el nombre del director capo")
    }else{
        res.send(`El nombre del director N° ${req.params.id} es ${director}`)
    }
} )


module.exports = router;