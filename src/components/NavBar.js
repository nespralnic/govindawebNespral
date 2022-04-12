import React from "react";
import './NavBar.css';
//import logo from '../img/logo.svg';
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom"

//const NavBar = (props) => 
//desestructurado:
const NavBar = ({id,links}) => {
    
    
    return (
        
        
        <nav>
            <NavLink className="containerLogo" to="/">
                <img  src='../../img/logo.svg'></img>
            </NavLink>

            
            <h1><span id="tituloGovinda">Govinda</span> Tienda Online. </h1>
            
            <div className="containerLinks">
                
                
                {links.map((element,indice)=>{
                    return <NavLink key={indice} to={element.tag}>{element.name}</NavLink> 
                })}  
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>

                
            </div>
        </nav>
        /*
        {props.children[0]}
        {props.children[1]}
        */
        )
}

export default NavBar;