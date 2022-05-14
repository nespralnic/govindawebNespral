import React from "react";
import './NavBar.css';
//import logo from '../img/logo.svg';
import CartWidget from "../components/CartWidget/CartWidget";
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
                
                <div className="links linkdesplegable">Productos
                    <ul className="containerdesplegable">
                    {links.map((element,indice)=>{
                        return <li key={indice}><NavLink className="sublinks"  to={element.tag}>{element.name}</NavLink></li> 
                    })} 
                    </ul> 
                </div>
                <NavLink className="links" to="contacto">Contacto</NavLink>
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