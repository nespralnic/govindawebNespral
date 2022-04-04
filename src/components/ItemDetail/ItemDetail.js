import './ItemDetail.css'

const ItemDetail = ({item}) =>{

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
