 import React, {useState} from  'react'
import {auth} from '../../firebase' 

const Login = () => {

    // autenticacion con nombre y usuario 
    const [email, setemail] = useState('')
    const [pass, setpass] = useState ('')

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
        .then((res) => alert ('usuario registrado')) 
    }
   
return(  <div>



        <h1>LOGIN</h1>
        <form onSubmit={registrarUsuario}>

<input onChange={(e) => {setemail(e.target.value)}}
type='email' placeholder="email"
 />

<input onChange={(e)=> {setpass(e.target.value)}}
type='password' placeholder="password"
/>

 <input type="submit"
 value="registrar"
 />
        </form>
    </div>
)
   
}
 export default Login