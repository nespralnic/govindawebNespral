import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Error from './components/Error/Error';
import React, {useState,useEffect} from "react";
//context
import CustomProvider from './context/context';

import { createContext } from 'react';

import './App.css';
import { Boton } from './components/Boton';
import { Title } from './components/Title';
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  const name = "alejandro";
  
  //o con objeto
  const links = [
    {name:"Tartas", tag:"categorys/tartas"},
    {name:"Burgers", tag:"categorys/burgers"},
    {name:"Vegan", tag:"filtered/vegan"},
    {name:"Sin Tacc", tag:"filtered/sintacc"},
  ];

  return (
    
    <>
    <CustomProvider>

    <BrowserRouter>
      <NavBar id="1" name={name} links={links}> </NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Bienvenido a la tienda online de Govinda Comidas" />}></Route>
        <Route path="/categorys/:category" element={<ItemListContainer />}></Route>
        <Route path="/filtered/:ops" element={<ItemListContainer />}></Route>
        <Route path="/products/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Error />}></Route>
        
      </Routes>
      
      
    </BrowserRouter>
    </CustomProvider>
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