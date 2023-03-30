import SearchBar from "./SearchBar";

export default function Home(){
    const [characters,setCharacters]=useState([]);

 
    const onSearch =(charactersID)=>{
      fetch(`https://rickandmortyapi.com/api/character/${charactersID}`)
      .then((res)=> res.json())
      .then((data)=>{
        if(data.name){
          if(!esRepetida(data.id)){
            setCharacters((prevEstad)=> [...prevEstad,data])
            return charactersID= "";
          }else{
          window.alert("El personaje se esta mostrando")};
        }else{
          window.alert("No se encuentra el personaje")
        }
      }); 
    };



 const esRepetida = (id)=>{
  let aux =false;
  characters.forEach((e)=>{
    if(e.id===id) aux=true;
  });
  return aux;
 };
 const onClose =(ID)=>{ 
    setCharacters(characters.filter((characters)=>characters.id !== ID))
  };
    return( 
    <div>
        <SearchBar onSearch={onSearch}/>
    </div>
    )
}