import { contexto } from '../../context/context';
import { useContext } from 'react';



const Cart = () =>{

    const {itemsCarrito} = useContext(contexto);

    console.log(itemsCarrito);

    return (
        <>
        <h1>soy cart</h1>
        {
            itemsCarrito.map((element,indice) => {
                return <p><span>{element.name+" "}</span><span>{element.cantidad}</span></p>
            })
        }
        
        </>
    )

}

export default Cart