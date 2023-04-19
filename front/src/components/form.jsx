import {useState} from "react";
import { Formu } from "../Estilos/formulario";
import { Label } from "../Estilos/Texto";
import { InputLogin } from "../Estilos/inputs";
import { Btn1 } from "../Estilos/botones";
import {Link} from "react-router-dom"

const regexE =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
function validate (inputs){
    let errors={} ;
    if(!regexE.test(inputs.username)) errors.username="Intenta con appdenico@gmail.com";
    if(inputs.username.length>35) errors.username="No puede contener mas de 35 caracteres";
    if(!inputs.password) errors.password="Debe contener entre 6 y 10 caracteres";
    if(inputs.password.length<6)errors.password="por default a12345"
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
            <Label htmlFor="">Usuario</Label>
            
            <InputLogin  type="text" value={userdata.username} name="username" onChange={(e)=>handleInputChange(e)} placeholder="Correo"/>
            <p>{errors.username}</p>
            <Label htmlFor="">Contraseña</Label>
            <InputLogin type="password" value={userdata.password} name="password" onChange={(e)=>handleInputChange(e)} placeholder="Contraseña"/>
            <p>{errors.password}</p>
            <Link to="Registro">Registrate</Link>
            <Btn1 type="submit">Entrar</Btn1>
        </Formu>
    )
}