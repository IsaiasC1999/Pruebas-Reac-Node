console.clear();
console.log("Servidor Escuchando")
// importamos express
const express = require('express')
const dotenv = require('dotenv');
const cosrs = require('cors');

dotenv.config();
const PORT = process.env.PORT;
const expressServer = express();
const {PersonaRouter} = require('./Routes/Personas')
const {AuthRouter} = require('./Routes/Auth');
const {authSessionRouter} = require('./Routes/auth-session')
const {authTokenRouter} = require('./Routes/auth-token')
const cookieParser = require('cookie-parser');

            //MIDEWERD
expressServer.use(cosrs({
  origin: 'http://localhost:3000'
}))            
expressServer.use(cookieParser());
expressServer.use(express.json());
expressServer.use(PersonaRouter);
expressServer.use('/Auth',AuthRouter);

// auth por session
expressServer.use('/AuthSession',authSessionRouter);
   
// auth por Token

 expressServer.use('/AuthToken',authTokenRouter)


   //levamos el servidor con su puerto 
expressServer.listen(PORT,()=>{
console.log('Servidor levantado en puerto' + PORT)});
   

