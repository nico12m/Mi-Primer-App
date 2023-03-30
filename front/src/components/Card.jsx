import { Carta, Nombre } from "../Estilos/Cards_estilo";
import { Linke } from "../Estilos/Links"; 
import {agregarFavorito, eliminarFavorito} from "../redux/actions"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
   const myFavorites = useSelector(state=> state.myFavorites)
   const dispatch = useDispatch();
   const [isFav,setIsFav]= useState(false);

   const handleFavorite =()=>{
      if(isFav){
         setIsFav(false);
         dispatch(eliminarFavorito(props.id))
      }else{
         setIsFav(true);
         dispatch(agregarFavorito(props))
      }
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <Carta>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
                   ) : (
               <button onClick={handleFavorite}>🤍</button>
                 )
          }
         <button onClick={props.onClose}>X</button>
         <h2>Especie: {props.species}</h2>
         <img  src={props.image} alt={props.name} /> 
         <Linke to={"/detail/"+props.id}>
         <Nombre>
            {props.name}
         </Nombre>
         </Linke>
         <h2>Genero: {props.gender}</h2>
      </Carta>
   );
}
