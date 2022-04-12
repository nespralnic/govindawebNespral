import '../ItemList/ItemList.css'
import Item from '../Item/Item';

const ItemList = ({productos}) =>{

    return(
        <>
        <div className="ItemListBox">
        
            {
            productos.map((element,indice)=>{
                return <Item key={indice} id={element.id} name={element.name} price={element.price} pictureUrl={element.pictureUrl}></Item> 
            })
            
        }
        </div>
        </>  
    );
}

export default ItemList;