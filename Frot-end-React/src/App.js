import {useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Page/PageHome/Home';
import PageInterno from './Page/PageInterno/PageInterno';
import PageUsuario from './Page/PageUsuario/PageUsuario';
import { LoginProvider } from './Page/Context/LoginContext';
function App() {
      
      const initial = {
        token : "",
        role : ""
      }
      const [tipoUsuario, setTipoUsuario] = useState(initial);
      
  return (
    <LoginProvider>

    <div>

        <Router>
           <Routes>
            <Route path='/' element={ <Home edit={setTipoUsuario}/> } /> 
            <Route path='*' element={"Pagina no encontrada"} />
            <Route path='/Home' element={ tipoUsuario.role ==="admin" ? <PageInterno/> : <PageUsuario/> } />                   
           </Routes>
           
        </Router>
      
    </div>
    </LoginProvider>
  );
}

export default App;
