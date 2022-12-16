import { Carta, Nombre } from "../Estilos/Cards_estilo";
import { Link } from "react-router-dom";
export default function Card(props) {
   return (
      <Carta>
         <button onClick={props.onClose}>X</button>
         <h2>Especie: {props.species}</h2>
         <img  src={props.image} alt={props.name} /> 
         <Link to={"/detail/"+props.id}>
         <Nombre>
            {props.name}
         </Nombre>
         </Link>
         <h2>Genero: {props.gender}</h2>
      </Carta>
   );
}
