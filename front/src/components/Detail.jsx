import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carta } from "../Estilos/Cards_estilo";
import { Linke } from "../Estilos/Links";
import { Texto } from "../Estilos/Texto";





export default function Detail(){
    const {detailId} =useParams();
    const [character,setCharacter]=useState({})
    
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);
    return (
      <div>
         <Texto> <Linke to="/Home">Inicio</Linke> </Texto>
        <Carta>
            <h1>nombre:{character.name}</h1>
            <h1>{character.status}</h1>
            <h1>{character.species}</h1>
            <h1>{character.gender}</h1>
            <h1>{character.origin?.name}</h1>
            <img src={character.image} alt={character.name}/>
        </Carta>
      </div>
    )
}