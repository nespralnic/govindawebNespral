
import React, {useState,useEffect} from "react";
import './ItemCount.css';

const ItemCount = ({stock,inicial,onAdd}) => {

    const [contador,setContador] = useState(inicial);

/*  ------ ejemplo useEffect------

    const [setup,setSetup] = useState(0);

    useEffect( () => {
        console.log("Se ejecutó use effect");
        setTimeout(() => {
            setSetup(setup + 1);
        }, 1000);
    },[contador]);

    ----> dentro del return falta el display
*/  

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
        contador>0 && onAdd(contador,true)  
    }
        

    return(
        <>
        <div className="container">
            <div className="contenedorCantidad">
                <button className="buttonStyles" onClick={restador}  >-</button>
                <div className="displayStyle" >{contador}</div>
                <button className="buttonStyles" onClick={sumador}  >+</button>   
            </div>
            <div>
                <button className="buttonAgregar" onClick={manejadorEnviar} > AGREGAR AL CARRITO</button>
            </div>
        </div>
        </>
    ) 

}

export default ItemCount;