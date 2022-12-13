import { Carta, Nombre } from "../Estilos/Cards_estilo";

export default function Card(props) {
   return (
      <Carta>
         <button onClick={()=>props.onClose}>X</button>
         <h2>Especie: {props.species}</h2>
         <img  src={props.image} alt={props.name} /> 
         <Nombre>{props.name}</Nombre>
         <h2>Genero: {props.gender}</h2>
      </Carta>
   );
}
