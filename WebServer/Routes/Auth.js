const {Router} = require('express')
const Datos = require('../bd');
const AuthRouter = Router();

//ningun tipo de autorizacion
AuthRouter.get('/publico',(req,res)=>{
   res.send("End point publico gg")
})

// autenticacion
 AuthRouter.post('/',(req,res)=>{
     let {email,password} = req.body;
     
     if(!email || !password) return res.status(400).send("Los campos no pueden estar vacios");

     let p1 = Datos.Personas.find(p => p.email === email && p.password === password);
     if( !p1 ) return res.status(401).send("No estas autenticado")
     
     res.send('Estas autenticado');
 })

//autorize 
AuthRouter.post('/authorize',(req,res)=>{
    
    let {email,password} = req.body;
     
    if(!email || !password) return res.status(400).send("Los campos no pueden estar vacios");

    let p1 = Datos.Personas.find(p => p.email === email && p.password === password);
    
    if(p1.role !== "admin") return res.sendStatus(401).send("No eres admin");
    
    res.send('Usted tiene el rol de ' + p1.role );

})

 module.exports = {AuthRouter};