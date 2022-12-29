import React from "react";
import SearchBar from "./SearchBar";
import { BarraNav } from "../Estilos/Cards_estilo";
import { Linke } from "../Estilos/Links";
import { Texto } from "../Estilos/Texto";
import logo from "../Imagenes/logo.png"

export default function Nav (props){

    return(
    <div>
      <BarraNav>
            <Texto> <Linke to="/Home">Inicio</Linke> </Texto>
            <Texto> <Linke to="/About">Info</Linke></Texto>
            <Texto> <Linke to="/">Salir</Linke></Texto>
            <SearchBar onSearch={props.onSearch}/>
      </BarraNav>
        <img src={logo} alt="" />
   </div>
         
    );
}