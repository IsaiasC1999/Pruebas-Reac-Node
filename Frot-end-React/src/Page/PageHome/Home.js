import React,{useContext,useEffect} from 'react';
import FormLogin from './FormLogin';
import {useNavigate} from 'react-router-dom'
import Header from './Header';
import {loginContext} from  '../Context/LoginContext'



const Home = ()=>{
    
    const navigate = useNavigate();
    const {jwt} = useContext(loginContext)
    useEffect(() => {
        if(jwt === true){navigate('/Home')}
    }, []);

    return(
    <div>
          <Header/>
          <FormLogin/>
    </div>
    );

}


export default Home;