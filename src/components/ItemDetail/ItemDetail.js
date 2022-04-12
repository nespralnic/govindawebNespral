
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import productosIniciales from '../../mock/mock';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';



const ItemDetail = ({item}) =>{

    const [showConfirmar,setShowConfirmar] = useState(false);

    const onAdd = (num,click) =>{
            console.log(`Seleccionaste ${num} productos.`);
            setShowConfirmar(click)
        }
    
    
    return(
        <>
        <div className='containerGeneral'>
            <div className='containerFoto'>
                 <img src={item.pictureUrl}></img>    
            </div> 
            <div className='containerData'>
                <div className='containerData__name'>{item.name}</div>
                <div className='containerData__descripcion'>{item.descripcion}</div> 
                <div className='containerData__ingredientes'>Contiene: {item.ingredientes}</div>  
                
                <div className='containerData__ItemCount'>
                {
                !showConfirmar ?
                <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>  
                : <div>
                    <Link to="/cart">
                        <button className='buttonConfirmar'>CONFIRMAR COMPRA</button>
                    </Link>
                    
                  </div> 
                
                }</div>
            </div>
            <div className='containerPrecio'>
                <div className='containerPrecio__circulo'>
                    <div><span>$</span>{item.price}</div> 
                </div> 
            </div>
        </div>
        </>  
    )
}

export default ItemDetail;
