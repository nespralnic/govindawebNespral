import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

import { contexto } from '../../context/context';
import { useState,useContext } from 'react';



const CartWidget = () =>{

    const {getCantidad} = useContext(contexto);

   /*
    if (getCantidad()>0) {
        setShow(true);
    }*/

    //console.log(show);
    return(
        <>
        <div className="ShoppingCartIcon"><ShoppingCartIcon />

            {getCantidad()>0 
            ?
            <div className='circulo'>
                <div className="CantidadProductos">{getCantidad()}</div>
            </div>
            : ""  
            }
                      
        </div>
        
        </>
    )
}

export default CartWidget;