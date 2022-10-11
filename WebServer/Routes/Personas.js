let express = require('express');
const PersonaRouter = express.Router();
const Datos = require('../bd');



PersonaRouter.use((req,res,next)=>{
      console.log(req.ip);
      next();
})


   // Metodo crear un persona
PersonaRouter.post('/Persona',(req,res) =>{
    
    let p1 = req.body;
    
    Datos.Personas.push(p1);
    
    res.send("Se crear con exito su usuario");
 })


    //Get Para Obtener Persona por Id
PersonaRouter.get('/Persona/:id',(req,res)=>{
//  let p1 = Personas.find(pers => pers._id === req.params.id)
let p1= Datos.Personas.find(per =>per._id === req.params.id)
res.send(p1); 
 })

    //Get Toda las Personas 
PersonaRouter.get('/Personas',(req,res)=>{
    res.send(Datos.Personas);
   })

   //Delete Para Borrar un Persona
   PersonaRouter.delete('/Persona/:id',(req,res)=>{
      let index = Datos.Personas.findIndex(per => per._id === req.params.id);
      
      if(index === -1) res.status(404).send("Usuario inexitente");

       Datos.Personas.slice(index,1);

       res.send("Se elimino con existo"); 
   })


   module.exports = {PersonaRouter}