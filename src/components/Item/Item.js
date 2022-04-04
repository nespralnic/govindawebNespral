import './Item.css'

const Item = ({id,name,price,pictureUrl}) => {

    return(
        <>
            
            <div className="itemContainer">
                <div className="itemPicture">
                    <img src={pictureUrl}></img>
                </div>
                <div className="boxDetalles">
                    <div className="itemTitle">{name}</div>
                    <div className="itemPrice">$ {price}</div>
                    <div className="itemDetalles">
                        <button>Ver Detalles</button>
                    </div>  
                </div>
                
            </div>
        </>
    )
}

export default Item;