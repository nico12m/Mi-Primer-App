import {useState} from "react";
import { Formu } from "../Estilos/formulario";

function validate (inputs){
    let errors={} ;
    if(!inputs.username) errors.username="Rellena el campo";
    if(inputs.username.length>35) errors.username="No puede contener mas de 35 caracteres";
    if(!inputs.password) errors.password="Debes colocar una contraseña";
    if(inputs.password.length<6)errors.password="Debe contener entre 6 y 10 caracteres"
    return errors;
}

export default function Form(props){
    const [userdata,setUserdata]=useState({
        username:"",
        password:""
    });
    const [errors,setErrors] = useState({
        username:"",
        password:""
    })
    const handleInputChange =(event)=>{
        setUserdata({
            ...userdata,
            [event.target.name]:event.target.value
        })
        setErrors(validate({
            ...userdata,
            [event.target.name]: event.target.value
        }))
    };
 const handleSubmit =(event)=>{
    event.preventDefault()
    props.login(userdata)
 }
    return (
        <Formu onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" value={userdata.username} name="username" onChange={(e)=>handleInputChange(e)}/>
            <p>{errors.username}</p>
            <label htmlFor="">Password</label>
            <input type="password" value={userdata.password} name="password" onChange={(e)=>handleInputChange(e)}/>
            <p>{errors.password}</p>
            <button type="submit">Entrar</button>
        </Formu>
    )
}