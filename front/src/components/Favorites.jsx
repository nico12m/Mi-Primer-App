import { Texto } from "../Estilos/Texto";
import { Linke } from "../Estilos/Links";
import { useSelector, useDispatch } from "react-redux";
import { Nombre } from "../Estilos/Cards_estilo";
import { Carta } from "../Estilos/Cards_estilo";
import { filterCards, orderCards } from "../redux/actions";
export default function Favorites (){
    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();
    const handleOrder =(event)=>{
        dispatch(orderCards(event.target.value))
    };
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    };

 return(
    <div>
        <div>
            <select onChange={handleOrder}>
                <option value="Order" disabled="disabled">OrderBy</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Filter" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>

        {
            myFavorites.map((character)=>{
                return(
                    <Carta>
                        <button onClick={character.onClose}>X</button>
                        <h2>Especie: {character.species}</h2>
                        <img  src={character.image} alt={character.name} /> 
                        <Linke to={"/detail/"+character.id}>
                        <Nombre>
                            {character.name}
                        </Nombre>
                        </Linke>
                        <h2>Genero: {character.gender}</h2>
                    </Carta>
                )
            })
        }
    </div>
 )
};

