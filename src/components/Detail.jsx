import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carta } from "../Estilos/Cards_estilo";





export default function Detail(){
    const {detailId} =useParams();
    const [character,setCharacter]=useState({})
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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
        <Carta>
            <h1>{character.name}</h1>
            <h1>{character.status}</h1>
            <h1>{character.species}</h1>
            <h1>{character.gender}</h1>
            <h1>{character.origin?.name}</h1>
            <img src={character.image} alt={character.name}/>
        </Carta>
    )
}