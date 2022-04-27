import { contexto } from '../../context/context';
import { useContext,useEffect,useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import "./Cart.css";

import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase/firebase";




const Cart = () =>{


    // --- display del carrito
    const {itemsCarrito,deleteItem,update,getCantidad,deleteCarrito} = useContext(contexto);

    const [carrito,setCarrito] = useState(itemsCarrito);
    const [modalActivo,setmodalActivo] = useState(false);

    const manejarClick = (id,array) =>{
        const arrayNuevo=deleteItem(id,array)
        setCarrito(arrayNuevo);
        //actualiza en context:
        update(arrayNuevo);
    }

    let total=0;

    // -- finalizar compra

    const comprador = {
        nombre: "nico",
        apellido: "rams",
        email: "nicorams@gmail.com"
    }

    const [idVenta,setIdVenta] = useState();
    
    const finalizarCompra = () => {
        console.log("finalizando compra");
        //donde apunta en firebase
        const ventaCollection = collection(db, "ventas")  
        addDoc(ventaCollection, {
            comprador,
            total,
            date: serverTimestamp()
        })      
        //promesa que devuelve un ID
        .then(result =>{
            setIdVenta(result.id)
        });

        itemsCarrito.forEach(element => {
            const orderDoc = doc(db, "productos",element.id);
            let nuevoStock = element.stock - element.cantidad;

            updateDoc(orderDoc,{stock:nuevoStock} )
            
        });
        deleteCarrito();
        setmodalActivo(!modalActivo)


    }
    
        //


    


    return (
        <>
        
        <div className='containerCart'>
        {
            getCantidad() == 0
            ? <p>No hay elementos en el carrito. <Link to="/" className='link'>MENÚ PRINCIPAL</Link></p>
            : 
            carrito.map((element,indice) => {
                total=total+element.cantidad*element.price;
                
                return <p key={indice}><span>{element.name+" "}</span><span>{" ("+element.cantidad+") "}</span><span> - {"$"+element.price*element.cantidad}</span>
                <button className='link botonBorrar' onClick={() => manejarClick(element.id,carrito)}>ELIMINAR</button>
                </p>
            })
             
        }
            
        {
            total>0 && <p className="total">TOTAL: {"$"+total}</p>
        }
        {   total>0 && <p className="contenedorBoton1"><button className="boton1" onClick={()=>{setmodalActivo(!modalActivo)}}>
            {
                !modalActivo 
                    ? ">>>"
                    : "<<<"     
            }
            </button></p>
        }
           
        {
            modalActivo 
            ? <div className='modal'>
                <button onClick={finalizarCompra}>FINALIZAR COMPRA</button>
            </div>
            : ""
        }
        </div>
        
        
        </>
    )

}

export default Cart