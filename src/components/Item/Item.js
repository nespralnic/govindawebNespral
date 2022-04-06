import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id,name,price,pictureUrl}) => {

    return(
        <>
            
            <div className="itemContainer">
                <div className="itemPicture">
                    <img src={pictureUrl}></img>
                </div>
                <div className="boxDetalles">
                    <div className="itemTitle">{name}</div>
                    <div className="itemPrice"><span>$</span>{price}</div>
                    <div className="itemDetalles">
                        <Link to={`/products/${id}`}>
                        <button className='itemDetalles__button'>Ver Detalles</button>
                        </Link>
                        
                    </div>  
                </div>
                
            </div>
        </>
    )
}

export default Item;