import React, {useEffect, useState} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import ClipLoader from "react-spinners/ClipLoader"

const producto = 
    {   id: 4, 
        name: "Falafel", 
        price: "470", 
        pictureUrl:"/static/media/falafel.f3ce29d7612ca1606b1e.JPG",
        descripcion:"20 Mini-hamburguesas. Vegan. Sin TACC.",
        ingredientes: "Garbanzos, cebolla, ajo, perejil, cilantro, limón."
    };

const promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(producto);
    }, 4000);
});


const ItemDetailContainer = () =>{
    

const [item,setItem] = useState([]);
const [show,setShow] = useState(false);

useEffect( () => {
        
        promesa.then( (item) => {
            setItem(item);
            setShow(!show)
        }).catch( () => {
            console.log("todo mal")
        });
    

    
},[]);
    console.log(item);
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