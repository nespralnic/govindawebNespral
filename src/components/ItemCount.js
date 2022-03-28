
import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = ({stock,inicial,onAdd}) => {


    const [contador,setContador] = useState(inicial);

    const sumador = () =>{
        if (contador<stock){
            setContador(contador + 1)
        }
        else{
            console.log("Has alcanzado el límite de stock.");
        }
    }

    const restador = () =>{
        if (contador>0){
            setContador(contador - 1)
        }
    }

    const manejadorEnviar = () =>{
        contador>0 && onAdd(contador)  
    }
        

    return(
        <>
        <div className="container">
            <div className="tituloProducto">Producto equis</div>
            <div className="contenedorCantidad">
                <button className="buttonStyles" onClick={restador}  >-</button>
                <div className="displayStyle" >{contador}</div>
                <button className="buttonStyles" onClick={sumador}  >+</button>   
            </div>
            <div>
                <button className="buttonAgregar" onClick={manejadorEnviar} > ENVIAR</button>
            </div>
        </div>
        </>
    ) 

}

export default ItemCount;