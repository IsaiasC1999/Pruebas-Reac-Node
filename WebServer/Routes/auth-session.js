const {Router} = require('express');

const Datos = require('../bd');
const authSessionRouter = Router();


  // Guarda la session de cada usuario y el guid; 
  const session= []


 // logeo con Session
authSessionRouter.post("/login",(req,res)=>{
    
    let {email,password} = req.body;
     
    if(!email || !password) return res.status(400).send("Los campos no pueden estar vacios");
    let p1 = Datos.Personas.find(p => p.email === email && p.password === password);
    if( !p1 ) return res.status(401).send("No estas autenticado")
    
    var sessionId;
    
    import ('nanoid').then(({nanoid})=>{
         
        let p1 = Datos.Personas.find(p => p.email === email && p.password === password);
        let guid = p1.guid;
        sessionId = nanoid();
        console.log(sessionId);
        session.push({sessionId,guid})
        res.cookie('sessionId',sessionId,{
        httpOnly : true, 
        })
      res.status(401).send('Estas autenticado');
  })
    
    
})



//obtener datos con session
authSessionRouter.get("/Profile",(req,res)=>{
   
      const {cookies} = req;
    if(!cookies.sessionId) return res.status(401).send("No esta autorizado");
      
    let userSession = session.find((s) => s.sessionId == cookies.sessionId) 
    
    if(!userSession) return res.status(401).send("No autorizado");
    
    let userInfo = Datos.Personas.find(user => user.guid === userSession.guid)
    delete userInfo.password;
    
    return res.send(userInfo);
})

module.exports = {authSessionRouter}


