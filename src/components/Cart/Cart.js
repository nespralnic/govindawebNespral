import { contexto } from '../../context/context';
import { useContext,useEffect,useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import "./Cart.css";

import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from "../../firebase/firebase";
import { onLog } from 'firebase/app';




const Cart = () =>{


    // --- display del carrito
    const {itemsCarrito,deleteItem,update,getCantidad,deleteCarrito} = useContext(contexto);

    const [carrito,setCarrito] = useState(itemsCarrito);
    const [modalActivo,setmodalActivo] = useState(false);
    const [modalFinalActivo,setmodalFinalActivo] = useState(false);

    const manejarClick = (id,array) =>{
        const arrayNuevo=deleteItem(id,array)
        setCarrito(arrayNuevo);
        //actualiza en context:
        update(arrayNuevo);
    }

    let total=0;

    // -- finalizar compra

    


    const [idVenta,setIdVenta] = useState();
    
    //error en el formulario
    const [formError,setformError] =useState("");

    const [datos,setDatos] = useState({"nombre":"", "apellido":"", "data":"", "datacheck":""});


    const finalizarCompra = (event) => {
        event.preventDefault();

        if ((datos.data !== datos.dataCheck) || (datos == {}) || (datos.data == "")){
            
            console.log("datos incongruentes");
            setformError("DATOS INCOGRUENTES");
            //console.log(formError);
            return false;
        }

        console.log("finalizando compra");
        //donde apunta en firebase
        const ventaCollection = collection(db, "ventas")  
        addDoc(ventaCollection, {
            datos,
            total,
            itemsCarrito,
            date: serverTimestamp()
            
        })      
        //promesa que devuelve un ID
        .then(result =>{
            setIdVenta(result.id)
        });

        //actualiza el stock en fb
        itemsCarrito.forEach(element => {
            const orderDoc = doc(db, "productos",element.id);
            let nuevoStock = element.stock - element.cantidad;

            updateDoc(orderDoc,{stock:nuevoStock} )
            
        });
        deleteCarrito();
        setDatos({});
        setmodalActivo(!modalActivo);
        setmodalFinalActivo(!modalFinalActivo)


    }
    
        //

        

        const handleInput = (event) => {
            //console.log(event.target.name)
            //console.log(event.target.value)

            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        }    
    
        //console.log(datos);

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
        {   total>0 && <p className="contenedorBoton1"><button className="boton1" onClick={()=>{setmodalActivo(!modalActivo);setformError("")}}>
            {
                
                !modalActivo 
                    ? ">>>"
                    : "<<<"
                    
            }
            </button></p>
        }
           
        {
            modalActivo & getCantidad()!=0
            ? <div className='modal'>
                <form onSubmit={finalizarCompra}>
                    <input placeholder='nombre' onChange={handleInput} name='nombre' required></input>
                    <input placeholder='apellido' onChange={handleInput} name='apellido' required></input>
                    <input placeholder='teléfono o email' onChange={handleInput} name='data' required></input>
                    <input placeholder='reingrese teléfono o email' onChange={handleInput} name='dataCheck' required></input>
                    <div className='formError'>{formError}</div>
                    <button type='submit' >FINALIZAR COMPRA</button>
                </form>
                
            </div>
            : ""
        }

        {
            modalFinalActivo
            ? <div className='modalFinal'>
                <p>GRACIAS</p>
                <p>Su número de orden es {idVenta}</p>
                <p>Nos comunicaremos por email o teléfono.</p>
                </div>
            : ""
        }
        
        </div>
        
        
        
        </>
    )

}

export default Cart