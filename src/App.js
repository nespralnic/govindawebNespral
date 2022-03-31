import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React, {useState,useEffect} from "react";

import './App.css';
import { Boton } from './components/Boton';
import { Title } from './components/Title';


function App() {

  

  const name = "alejandro";
  const links = ["Nosotros","Productos","Contacto"];
  //o con objeto
  const linksObj = [{nombre:"Nosotros",tag:"#"},{nombre:"Producto",tag:"#"},{nombre:"Contacto",tag:"#"}];

  return (
    
    <>
    <NavBar id="1" name={name} links={links}> </NavBar>
    
    <ItemListContainer mensaje="Bienvenido a la tienda online de Govinda Comidas" />
    
    </>

  );
}

export default App;




/*

-- fuera del return
const [show,setShow] = useState(true);

  //dismount
  const toglear = () => {
    setShow(!show)
  }

--dentro del componente
{
    show 
    ? <ItemListContainer mensaje="Bienvenido a la tienda online de Govinda Comidas" />
    : <h1>acá no hay nada</h1>
    }
    <button onClick={toglear}>togle</button>
  */