import React, {useEffect, useState} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import ClipLoader from "react-spinners/ClipLoader"
import { productosIniciales } from "../../mock/mock";
import { useParams } from "react-router-dom";


const promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(productosIniciales);
    }, 4000);
});


const ItemDetailContainer = () =>{
    

const [item,setItem] = useState([]);
const [show,setShow] = useState(false);

const {id} = useParams();

console.log(id);

useEffect( () => {
        
        promesa.then( (productos) => {
            const productoFiltrado = productos.filter(prod => prod.id == id);
            setItem(productoFiltrado[0]);
            setShow(!show)
        }).catch( () => {
            console.log("todo mal")
        });
    

    
},[]);

    return(
        <>
        
        {
        show ?
            <ItemDetail item={item}></ItemDetail>
            : <div className="spinner"><ClipLoader /></div>
        }
        </>
    )}

export default ItemDetailContainer;