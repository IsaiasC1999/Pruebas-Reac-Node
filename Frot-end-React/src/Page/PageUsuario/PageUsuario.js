import React,{useContext,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {loginContext} from '../Context/LoginContext'
import {dataUser} from '../services/ServicesLogin'


const PageUsuario = ()=>{

    const {logout,jwt,setData,data} = useContext(loginContext)
    const navigate = useNavigate(); 

    useEffect(() => { 
        const obtenerDatos = async ()=>{
            try {
                
                const resu = await dataUser()
                
                setData(resu)
             
            } catch (error) {
                console.log("el error fue " + error)    
            }
    
         }   
          
        if(jwt === false )
        { navigate("/") }else{
            obtenerDatos();
        }
        
         

         // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

    const logoutbtn = ()=>{
        logout()
        navigate('/')
        } 

    return(
        <div>
            <h3>Bienvenido a la app <br/> {data === null ? "" : data.name } </h3>
            <button onClick={logoutbtn}>Cerra Sesion</button>
            Es page del Usuario
        </div>
    );

}


export default PageUsuario;