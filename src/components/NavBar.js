import React from "react";
import './NavBar.css';
import logo from '../img/logo.svg';
import CartWidget from "./CartWidget";


const NavBar = (props) => {
    console.log(props.id);
    
    return (
        
        
        <nav>
            <img className="containerLogo" src={logo}></img>
            <h1><span id="tituloGovinda">Govinda</span> Tienda Online. </h1>
            
            <div className="containerLinks">
                
                
                {props.links.map((element,indice)=>{
                    return <a key={indice} href="#">{element}</a> 
                })}  
                
                <CartWidget />
            </div>
        </nav>
        /*
        {props.children[0]}
        {props.children[1]}
        */
        )
}

export default NavBar;