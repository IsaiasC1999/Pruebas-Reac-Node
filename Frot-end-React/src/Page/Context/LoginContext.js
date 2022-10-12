import React,{createContext,useState} from 'react';

export const loginContext = createContext();


export const LoginProvider = ({children})=>{

    const [isAutenticate, setisAutenticate] = useState(window.localStorage.getItem('IsAutenticate') || false)  ;
    const [role, setRole] = useState(null);

    const verify = ()=>{
        // hago la logica de verificar si le token sigue existiendo
        
        // y modifico el estado del isAutenticate


    } 

    const login = ()=>{
        localStorage.setItem('IsAutenticate',true)
    }

    return(
        <loginContext.Provider value={{isAutenticate,setRole,role,setisAutenticate}} >
            {children}
        </loginContext.Provider>
    );

}