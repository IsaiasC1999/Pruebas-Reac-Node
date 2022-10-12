import React,{useContext,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {loginContext} from '../Context/LoginContext'


const PageUsuario = ()=>{

    const {isAutenticate,role} = useContext(loginContext)
    const navigate = useNavigate(); 

    useEffect(() => {
        if(isAutenticate === false || role !== "user" ){
             navigate('/')            
        } 
         // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

    return(
        <div>
            Es page del Usuario
        </div>
    );

}


export default PageUsuario;