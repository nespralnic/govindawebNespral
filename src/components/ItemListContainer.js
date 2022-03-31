import React, {useEffect, useState} from "react";
import './ItemListContainer.css'
import ItemCount from './ItemCount';
import ItemList from './ItemList/ItemList';
import foto from '../img/falafel.JPG'

const productosIniciales = [
    {id: 1, name: "Hojas verdes", price: "500", pictureUrl:""},
    {id: 2, name: "Brocoli", price: "530", pictureUrl:""},
    {id: 3, name: "Falafel", price: "470", pictureUrl:""},
    {id: 4, name: "Trigo Sarraceno", price: "500", pictureUrl:foto}
]

const promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(productosIniciales);
    }, 3000);
});

const ItemListContainer = (props) => { 

    
    const onAdd = (num) =>{
        console.log(`Seleccionaste ${num} productos.`);
    }
    
    const [productos,setProductos] = useState([]);
    const [show,setShow] = useState(false);

    useEffect( () => {
            
            promesa.then( (productos) => {
                setProductos(productos);
                setShow(!show)
            }).catch( () => {
                console.log("todo mal")
            });
        console.log(promesa);

        
    },[]);




    return(
        <>
        <p className="ItemListContainer__mensaje">{props.mensaje}</p>
        
        {show ?
            <ItemList productos={productos}></ItemList>
            : <p className="cargando"> cargando... </p>
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