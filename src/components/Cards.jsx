import Card from './Card';
import { Cartas } from '../Estilos/Cards_estilo';

export default function Cards(props) {
   const { characters } = props;
   return <Cartas>
      {characters.map(Card)}
   </Cartas>;
}
