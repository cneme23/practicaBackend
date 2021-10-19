//Aca requiero la libreria express
const express = require("express");
//Aca guardo la ejecucion de express en la variable app 
const app = express();
//Aca requiero el modulo de peliculas
const rutaPeliculas = require("./routes/peliculas.js")
//Aca requiero el modulo de directores
const rutaDirectores = require("./routes/directores.js");
const rutasMain = require("./routes/main")

//Aca levanto el servidor
app.listen(3000,()=>console.log( "Servidor corriendo en el puerto 3000!!"));
//Aca digo que todas las rutas con el prefijo "/peliculas" va a ser atendido por el archivo contenido en la variable rutaPeliculas 
app.use("/peliculas",rutaPeliculas);

//Aca le digo que la ruta de directores va a ser manejada por el archivo directores
app.use("/directores",rutaDirectores);
app.use("/main", rutasMain);



app.get("/",(req,res)=>{
    console.log("Esto es lo que contiene req ", req);
    res.send("Hola el servidor esta levantado")
})



    


