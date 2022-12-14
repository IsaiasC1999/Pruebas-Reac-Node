const {Router} = require('express');
const {SignJWT,jwtVerify} = require('jose')
const Datos = require('../bd');
 
const authTokenRouter = Router(); 

//Logeo con Token
authTokenRouter.post('/login',async (req,res)=>{
  
    let {email,password} = req.body;
     
    if(!email || !password) return res.status(400).send("Los campos no pueden estar vacios");
    let p1 = Datos.Personas.find(p => p.email === email && p.password === password);
    if( !p1 ) return res.status(401).send("No estas autenticado");
    
    const {guid,role} = p1;
    const jwtContructor = new SignJWT({guid});
    const encoder = new TextEncoder();
    const jwt = await jwtContructor.setProtectedHeader
    ({alg:'HS256',typ: 'JWT'}).setIssuedAt()
     .setExpirationTime('1h')
     .sign(encoder.encode(process.env.SECRECT));
    
     return res.send({jwt,role});
    
})


// end point con token 

authTokenRouter.get('/profile',async (req,res)=>{

    const {authorization} = req.headers; 
    
    if(!authorization) res.status(401).send("No autorizador perro");
    const encoder = new TextEncoder();
    const {payload} = await jwtVerify(authorization,encoder.encode(process.env.SECRECT))
    console.log(payload);
    
    let userInfo = Datos.Personas.find(user => user.guid === payload.guid);
    delete userInfo.password;
    
    return res.send(userInfo);

})




module.exports ={authTokenRouter}