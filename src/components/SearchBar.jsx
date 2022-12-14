import { useState } from "react";

export default function SearchBar(props) {
   const [id,setId]=useState("")

   const handleChange = (valor)=>{
      setId(valor.target.value)
   }
   const numAzar = (id)=>{
     let min = Math.ceil(1);
     let max = Math.floor(826);
      let num = Math.floor(Math.random() * (max - min) + min);
      if(num!==id) {return num} else {numAzar(id)}
   }
   return (
      <div>
      <input type='search'name="search" id="" onChange={handleChange} placeholder="Buscar Por ID" />
      <button onClick={()=>props.onSearch(id)}>Agregar</button>
      <button onClick={()=>props.onSearch(numAzar(id))}>Aleatorio</button>
      </div>
   );
}
