import React from 'react';
import FormLogin from './FormLogin';
import Header from './Header';



const Home = ({edit})=>{
    
    

    return(
    <div>
          <Header/>
          <FormLogin editFinal={edit} />
    </div>
    );

}


export default Home;