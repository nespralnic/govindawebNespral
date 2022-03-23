import React from "react";
import './ItemListContainer.css'

const ItemListContainer = (props) => { 
    return(
        
            <p className="ItemListContainer__mensaje">{props.mensaje}</p>
        
    )
}

export default ItemListContainer;