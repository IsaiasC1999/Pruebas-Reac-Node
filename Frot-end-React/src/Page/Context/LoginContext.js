import React,{createContext,useState} from 'react';

export const loginContext = createContext();


export const LoginProvider = ({children})=>{

    
    const [jwt, setJwt] = useState(Boolean(localStorage.getItem('jwt')));

    const [data, setData] = useState(null);

    const [role, setRole] = useState(null);
    // const verify = ()=>{
    //     // hago la logica de verificar si le token sigue existiendo
        
    //     // y modifico el estado del isAutenticate


    // } 

    const login = (valor)=>{
        localStorage.setItem('jwt',valor)
        setJwt(true)  
                
    }

    const logout = ()=>{
        localStorage.removeItem('jwt')
        setJwt(false)
        setRole(null)
        setData(null)
    } 
    console.log(jwt)  
    return(
        <loginContext.Provider value={{data,setData,login,setJwt,jwt,logout,role ,setRole}} >
            {children}
        </loginContext.Provider>
    );

}