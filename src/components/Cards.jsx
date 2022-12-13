import Card from './Card';
import { Cartas } from '../Estilos/Cards_estilo';

export default function Cards(props) {
   const { characters } = props;
   return <Cartas>
      {characters.map((characters)=>(
         <Card 
         key ={characters.id}
         name={characters.name}
         species={characters.species}
         gender={characters.gender}
         image={characters.image}
         onClose={()=>props.onClose(characters.id)}
         />
      ))}
   </Cartas>;
}
