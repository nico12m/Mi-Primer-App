import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER, ORDER} from "./type";
 export const initialState = {
    myFavorites:[],
    allCharacters:[]
};

const reducer=(state= initialState,action)=>{
    switch(action.type){
        case AGREGAR_FAVORITO:
            return {
                ...state,
                myFavorites:[...state.allCharacters,action.payload],
                allCharacters:[...state.allCharacters, action.payload]
            };

        case ELIMINAR_FAVORITO:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            };

        case FILTER:
                const { allCharacters } = state;
                const allCharsFilteres = allCharacters.filter(chars=> chars.gender === action.payload);
                return{
                    ...state,
                    myFavorites: allCharsFilteres
                };

        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === "Ascendente"
                ? allCharacters.sort((a,b)=> a.id - b.id)
                : allCharacters.sort((a,b)=>b.id - a.id )
            };

            default:
                return{
                    ...state
                }
    }
};
export default reducer;