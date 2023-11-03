import { useState } from "react";
import {useDispatch} from "react-redux"
import { login } from "../../redux/apiCalls";

const Login = () => {
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const dispatch= useDispatch();
    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch,{username,password});
    };
    
  return (
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" 
    }}>
        <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}  style={{padding:10, marginBottom:10}} />
        <input type="text" placeholder="password" onChange={e=>setPassword(e.target.value)} style={{padding:10,marginBottom:10}}/>
        <button style={{padding:10 ,width:70,pointer:"cursor"}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
