import React from "react"
import { Texto2 } from "../Estilos/Texto";
import { A } from "../Estilos/Links";
import Nav from "./Nav";
export default function About(){
    return( 
    <div>
        <Nav/>
        <Texto2 >Hola bienvenido a mi App <br/> Soy Nicolas Marcelo Mojavik<br/>
        <A target="_blank" href="https://api.whatsapp.com/send?phone=2216077686">Mi Whatsapp</A></Texto2>
        
    </div>
    )
}