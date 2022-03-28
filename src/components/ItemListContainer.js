import React from "react";
import './ItemListContainer.css'
import ItemCount from './ItemCount';

const ItemListContainer = (props) => { 
    
    const onAdd = (num) =>{
        console.log(`Seleccionaste ${num} productos.`);
    }

    return(
        <>
        <p className="ItemListContainer__mensaje">{props.mensaje}</p>
        <ItemCount stock={10} inicial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;