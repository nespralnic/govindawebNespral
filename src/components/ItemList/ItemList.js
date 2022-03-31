import '../ItemList/ItemList.css'
import Item from '../Item/Item';

const ItemList = ({productos}) =>{

    return(
        <>
        <div className="ItemListBox">
        {   
            (productos === []) ? 
                console.log("hola") : console.log("chau")
            
            }
            {
            productos.map((element,indice)=>{
                return <Item key={element.id} name={element.name} price={element.price} pictureUrl={element.pictureUrl}></Item> 
            })
            
        }
        </div>
        </>  
    );
}

export default ItemList;