import { useState } from "react";

export default function SearchBar(props) {
   const [id,setId]=useState("")

   const handleChange = (valor)=>{
      setId(valor.target.value)
   }
   return (
      <div>
      <input type='search'name="search" id="" onChange={handleChange} placeholder="Buscar Por ID" />
      <button onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
