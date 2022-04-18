import { contexto } from '../../context/context';
import { useContext,useState } from 'react';
import { Link, NavLink } from "react-router-dom"

import "./Cart.css"


const Cart = () =>{

    const {itemsCarrito,deleteItem,update,getCantidad} = useContext(contexto);

    const [carrito,setCarrito] = useState(itemsCarrito);

    const manejarClick = (id,array) =>{
        const arrayNuevo=deleteItem(id,array)
        setCarrito(arrayNuevo);
        //actualiza en context:
        update(arrayNuevo);
    }

    let total=0;

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
            {total>0 && <p className="total">TOTAL: {"$"+total}</p>}
        </div>
        
        </>
    )

}

export default Cart