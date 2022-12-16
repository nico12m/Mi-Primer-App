import React from "react";
import SearchBar from "./SearchBar";
import { BarraNav } from "../Estilos/Cards_estilo";
import { Link } from "react-router-dom";
import { Texto } from "../Estilos/Texto";

export default function Nav (props){

    return(
        <BarraNav>
            <Texto> <Link to="/Home">Home</Link> </Texto>
           <Texto> <Link to="/About">About</Link></Texto>
           
           
        <BarraNav/>
            <SearchBar onSearch={props.onSearch}/>
        </BarraNav>
         
    );
}