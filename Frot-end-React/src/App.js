import React,{useContext} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Page/PageHome/Home';
import PageInterno from './Page/PageInterno/PageInterno';
import PageUsuario from './Page/PageUsuario/PageUsuario';
import { loginContext } from './Page/Context/LoginContext';


function App() {
      
     const {jwt,role} = useContext(loginContext)
     console.log(jwt) 
      
  return (
   

    <div>

        <Router>
           <Routes>
            <Route path='/' element={ <Home/> } /> 
            <Route path='*' element={"Pagina no encontrada"} />
            <Route path='/Home' element={ role === "admin" ? <PageInterno/> : <PageUsuario/> } />                   
           </Routes>
                
        </Router>
      
    </div>
    
  );
}

export default App;
