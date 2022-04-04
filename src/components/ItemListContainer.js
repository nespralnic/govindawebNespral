import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList/ItemList';
import foto from '../img/falafel.JPG';

import ClipLoader from "react-spinners/ClipLoader"
/*
const productosIniciales = [
    {id: 1, name: "Hojas verdes", price: "500", pictureUrl:""},
    {id: 2, name: "Brocoli", price: "530", pictureUrl:""},
    {id: 3, name: "Hongos", price: "530", pictureUrl:foto},
    {id: 4, name: "Falafel", price: "470", pictureUrl:"/static/media/falafel.f3ce29d7612ca1606b1e.JPG"},
    {id: 5, name: "Trigo Sarraceno", price: "500", pictureUrl:foto},
    {id: 6, name: "Albóndigas", price: "470", pictureUrl:foto}
]

const promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(productosIniciales);
    }, 3000);
});
*/
const productosFetch = fetch("https://run.mocky.io/v3/4d6732fb-792e-4884-ad50-35c87659a795")
.then(data => data.json())
.then(json => json)



const ItemListContainer = (props) => { 
    
    const onAdd = (num) =>{
        console.log(`Seleccionaste ${num} productos.`);
    }
    
    const [productos,setProductos] = useState([]);
    const [show,setShow] = useState(false);

    useEffect( () => {
            
            productosFetch.then( (productos) => {
                setProductos(productos);
                setShow(!show)
            }).catch( () => {
                console.log("todo mal")
            });
        

        
    },[]);




    return(
        <>
        <p className="ItemListContainer__mensaje">{props.mensaje}</p>
        
        {show ?
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