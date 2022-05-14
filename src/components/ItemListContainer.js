import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import { productosIniciales } from "../mock/mock";
import { useParams } from "react-router-dom";

import ClipLoader from "react-spinners/ClipLoader"

import { db } from "../../src/firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore"


const promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(productosIniciales);
    }, 3000);
});


const ItemListContainer = (props) => { 
    
    //console.log(db);
    const productosCollection = collection(db,"productos");
    /*
    const probandoQuery = query(productosCollection, 
        where("category","==","tartas"),
        where("price","<",600));

    getDocs(productosCollection)
    .then((result)=>{
        //devuelve un array:
        const docs = result.docs;
        //recorrer el array ( función data() para cada posición del array):
        const lista = docs.map(prod => {
            //agregando el id
            const id = prod.id;
            //agrupando en un solo objeto
            const product = {
                id,
                ...prod.data()
            }
            return product;
        })
        console.log(lista);
    })
    
    */

    const onAdd = (num) =>{
        console.log(`Seleccionaste ${num} productos.`);
    }


    
    const [productos,setProductos] = useState([]);
    const [show,setShow] = useState(false);
    const [destacados,setDestacados] = useState([]);

    // const respuesta = useParams(); destructurar:
    
    const {category} = useParams();
    //vegan o sin tacc
    const {ops} = useParams();


    /*
    useEffect( () => {
            
            promesa.then( (productos) => {
                
                    const productosFiltrados = productos.filter(prod => prod.category === category);
                    setProductos(productosFiltrados);

                setShow(false)
            }).catch( () => {
                console.log("todo mal")
            });
        

        
    },[category]);
    */
    
    /// productos destacados
    useEffect( () =>{
        
        const categQuery = query(productosCollection, where ("destacado","==",true));
        getDocs(categQuery)
        .then((result)=>{ 
            const docs = result.docs;
            const list = docs.map(prod => {
                const id = prod.id; 
                const produc = {
                    id,
                    ...prod.data()
                    }   
                return produc
                });
            //setProductos(list)
            // ACÁ HAY QUE PONER UNA VARIABLE PRODUCTOS DESTACADOS Y LISTO
            setDestacados(list);
            
        });
    },[]);
    

    //effect por categorías tartas o burgers
    useEffect( () => {
        //condicion para poder hacer el query
        if (category){
            const categoryQuery = query(productosCollection, where("category","==",category));
            
            getDocs(categoryQuery)
                .then((result)=>{
                //devuelve un array:
                const docs = result.docs;
                //recorrer el array ( función data() para cada posición del array):
                //si no encuentra no da error, solo viene vacío (validar?)
                const lista = docs.map(prod => {
                    //agregando el id
                    const id = prod.id;
                    //agrupando en un solo objeto
                    const product = {
                        id,
                        ...prod.data()
                    }
                    return product;
                    });
                
                    setProductos(lista);
                    setShow(false)
            
                }).catch( () => {
                console.log("todo mal")
            });
        }

        
   
    },[category]); 


    //effect para ops vegan o sinTACC
    useEffect( () => {
        if (ops){
            
            const categoryQuery = query(productosCollection, where(ops,"==",true));
            
            getDocs(categoryQuery)
                .then((result)=>{
                const docs = result.docs;
                const lista = docs.map(prod => {
                    const id = prod.id;
                    const product = {
                        id,
                        ...prod.data()
                    }
                    return product;
                    });
                
                    setProductos(lista);
                    setShow(false)
            
                }).catch( () => {
                console.log("todo mal")
            });
        }

    },[ops]);


    return(
        <>
            
        
        { 
            category || ops ? // condición para mostrar o no mensaje de bienvenida
                !show ?
                    <ItemList mensaje={[ops,category]} productos={productos}></ItemList>
                    : <div className="spinner"><ClipLoader /></div> 
            : <>
                <p className="ItemListContainer__mensaje">{props.mensaje}</p>
                <p className="ItemListContainer__mensaje">PRODUCTOS DESTACADOS DEL MES!</p> 
                <ItemList mensaje={false} productos={destacados} ></ItemList>
                
            </>    

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