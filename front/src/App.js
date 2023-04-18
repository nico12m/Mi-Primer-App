import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import { useEffect, useState } from 'react';
import About from "./components/About"
import Detail from "./components/Detail.jsx"
import Form from './components/form';
import { Centrado } from './Estilos/centrado';
import { Registro } from './components/Registro';
// import characters from "./data"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites';


function App () {
  const [characters,setCharacters]=useState([]);

 
    const onSearch =(charactersID)=>{
      fetch(`http://localhost:3001/rickandmorty/onsearch/${charactersID}`)
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
const location = useLocation();

const usuario = "Nico";
const contraseña = "123456";
const navigate=useNavigate();
const [acceso,setAcceso]=useState(false);
const login =(userdata)=>{
  if(userdata.username === usuario&& userdata.password === contraseña){
  navigate("/Home")
  setAcceso(true)
};
};
useEffect(()=>{
  !acceso && navigate("/")
},[acceso])

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
  
  return (
    <div className='App'> 
      {location.pathname ==="/Home"&&<Nav onSearch={onSearch}/>}    
          
      <Routes>
        <Route path="/" element={<Centrado><Form login={login}/></Centrado>}/>
        <Route path="/Home" element={<Cards characters={characters} onClose={onClose}/>} />     
        <Route path="/About" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/Registro" element={<Registro/>}/>
      </Routes> 
    </div>
  )
}

export default App
