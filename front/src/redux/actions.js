import { AGREGAR_FAVORITO,ELIMINAR_FAVORITO, FILTER, ORDER } from "./type";

export const agregarFavorito=(pers)=>{
    return {type:AGREGAR_FAVORITO,payload:pers}
}

export const eliminarFavorito=(id)=>{
    return {type:ELIMINAR_FAVORITO,payload:id}
}

export const filterCards = (gender)=>{
    return {type:FILTER,payload:gender}
};

export const orderCards=(id)=>{
    return{type:ORDER, payload:id}
};