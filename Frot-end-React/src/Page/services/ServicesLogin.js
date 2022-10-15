
import axios from "axios";


// fetch("http://localhost:4000/AuthToken/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

 export const loginSevices = async (usu, pas) => {



    // var raw = JSON.stringify({
    //     "email": "isa@gmail.com",
    //     "password": "isa1234"
    //   });





    // var requestOptions = {
    //      method: 'POST',
    //     headers: ["Content-Type", "application/json"],
    //     body: raw,
    //      redirect: 'follow'
    //     };


    //    const consulta = await fetch("http://localhost:3555/AuthToken/login", {
    //     method:'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body : raw 
    //    })
    //    const resu = await consulta.text();
    //    console.log(resu);
    //    return resu; 



    // ------------ Con axios  


    const consulta = await axios.post("http://localhost:4000/AuthToken/login", {email: usu,
    contra : pas })

    const data = await consulta.data;
    
    return data;
}


export const dataUser = async()=>{

    
    const datainfo = await  axios({
        method: 'get',
        url: 'http://localhost:4000/AuthToken/profile',
        headers : {
            'Authorization': window.localStorage.getItem('jwt')
        }
    })

    const resu =  await datainfo.data
    console.log(resu)
    return resu;
}

