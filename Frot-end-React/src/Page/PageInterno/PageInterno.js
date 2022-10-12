import React, { useContext,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {loginContext} from '../Context/LoginContext'



const PageInterno = ()=>{

      const {isAutenticate,role} = useContext(loginContext)
      const navigate = useNavigate(); 

      useEffect(() => {
           if(isAutenticate === false || role !== "admin" ){
                navigate('/')            
           }

           
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <div>
            Pagina del interno gg
        </div>
    );

}


export default PageInterno;