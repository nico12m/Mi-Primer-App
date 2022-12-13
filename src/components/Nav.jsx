import React from "react";
import SearchBar from "./SearchBar";
import { BarraNav } from "../Estilos/Cards_estilo";

export default function Nav (props){
    return(
        <BarraNav>
            <SearchBar onSearch={props.onSearch}/>
        </BarraNav>
    )
}