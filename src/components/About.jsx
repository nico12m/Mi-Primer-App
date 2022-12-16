import React from "react"
import { Texto2 } from "../Estilos/Texto"
import { Link } from "react-router-dom"
export default function About(){
    return( 
    <div>
        <Texto2 >Hola bienvenido a mi App <br/> Soy Nicolas Marcelo Mojavik<br/>
        <a href="https://api.whatsapp.com/send?phone=2216077686">Mi Whatsapp</a></Texto2>
    </div>
    )
}