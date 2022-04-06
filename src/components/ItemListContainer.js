import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList/ItemList';
import { productosIniciales } from "../mock/mock";
import { useParams } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader"

const promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(productosIniciales);
    }, 3000);
});
/*
const productosFetch = fetch("https://run.mocky.io/v3/4d6732fb-792e-4884-ad50-35c87659a795")
.then(data => data.json())
.then(json => json)

console.log(productosFetch);
*/

const ItemListContainer = (props) => { 
    
    const onAdd = (num) =>{
        console.log(`Seleccionaste ${num} productos.`);
    }
    
    const [productos,setProductos] = useState([]);
    const [show,setShow] = useState(false);

    // const respuesta = useParams(); destructurar:
    const {category} = useParams();

    useEffect( () => {
            
            promesa.then( (productos) => {
                
                    const productosFiltrados = productos.filter(prod => prod.category === category);
                    setProductos(productosFiltrados);

                setShow(false)
            }).catch( () => {
                console.log("todo mal")
            });
        

        
    },[category]);




    return(
        <>
        <p className="ItemListContainer__mensaje">{props.mensaje}</p>
        
        {!show ?
            <ItemList productos={productos}></ItemList>
            : <div className="spinner"><ClipLoader /></div>
        }
        
        </>
    )
}

export default ItemListContainer;

/*
    useEffect( () =>{
        const intervalo = setInterval(() => {
            
        }, 1000);

        return ()=>{
            //esto se ejecuta al matar el componente
            clearInterval(intervalo)
        }
    }
    ,[]);
*/

//<ItemCount stock={10} inicial={1} onAdd={onAdd}/>