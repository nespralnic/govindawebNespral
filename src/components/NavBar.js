import React from "react";
import './NavBar.css';
import logo from '../img/logocart.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavBar = () => {

    return (
        
        
        <nav>
            <img className="containerLogo" src={logo}></img>
            <h1><span id="tituloGovinda">Govinda</span> Tienda Online</h1>
            
            <div className="containerLinks">
                <a href="#">contacto</a>
                <a href="#">producto</a>
                <a href="#">nosotros</a>
                <ShoppingCartIcon />
            </div>
        </nav>
        
        )
}

export default NavBar;