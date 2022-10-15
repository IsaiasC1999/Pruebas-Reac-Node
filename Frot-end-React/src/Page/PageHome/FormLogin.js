import React,{useState,useRef, useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import './FormLogin.css'
import {loginSevices} from '../services/ServicesLogin'
import {loginContext} from '../Context/LoginContext'


const FormLogin = ()=> {

        const [usuario, setUsuario] = useState("");
        const [contraseña, setContraseña] = useState("");
        const {setRole,login} = useContext(loginContext)
        const navigate = useNavigate();              
        const refSpan = useRef();



      const hanglerSubmit = async  (e)=>{
          e.preventDefault();
          
          try {
            const {jwt,role} = await loginSevices(usuario,contraseña)
            // editFinal({jwt,role})
            login(jwt)
            setRole(role)
            navigate("/Home")

          } catch (error) {
              
             console.log(error)
                refSpan.current.style.display = "block"  
               setTimeout(() => {
                refSpan.current.style.display= "none"
               }, 4000); 
            
          }  
          
          
          
          setUsuario("");
          setContraseña("")
          
        }
        
        return(
            <section className='sectionLogins'>
               <h2 className='h2-Login'>Inicio Sesion</h2>
                <form onSubmit={hanglerSubmit} >
                    <label>Usuario</label><br/>
                    <input 
                         type="text"  
                          name='usuario'
                          value={usuario}
                          onChange={(e)=>{setUsuario(e.target.value)}}
                         placeholder='Ingrese su usuario' /><br/>
                    <label>Paswword</label><br/>
                    <input 
                         type="password"
                         name='contraseña'
                         value={contraseña}
                         onChange={(e)=>{setContraseña(e.target.value)}}
                         placeholder='ingrese su contraseña'
                           /> <br/>
                     
                    <input type="submit" value="Ingresar" />
                </form>
                <span style={{display : "none"}} ref={refSpan} >Usuario o contraseña incorrecta</span>
            </section>    
        );

}

export default FormLogin;