import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
// import characters from "./data"


function App () {
  const [characters,setCharacters]=useState([]);
  const onSearch =(charactersID)=>{
    fetch(`https://rickandmortyapi.com/api/character/${charactersID}`)
    .then((res)=> res.json())
    .then((data)=>{
      if(data.name){
        setCharacters((prevEstad)=> [...prevEstad,data])
      }else{
        window.alert("No se encuentra el personaje")
      }
    })
  };
const onClose = characters.filter((id)=>characters.id !== id);
  return (
    <div className='App'>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards
          characters={characters} onClose={onClose}/>
      </div>
      {/* <h2>Creada Por:<br/> Nicolas Marcelo Mojavik</h2> */}
    </div>
  )
}

export default App
