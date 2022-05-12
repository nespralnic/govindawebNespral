import '../ItemList/ItemList.css'
import Item from '../Item/Item';

const ItemList = ({productos,mensaje}) =>{

    let msj = "";
    let op ="";
    


    if (mensaje){

        let [menus,filtros] = mensaje;
        if (filtros){ op = filtros};
        if (menus){ op = menus};

        if (op == "vegan"){
            msj = "Cualquier otro producto puede salir vegan a pedido. =)"
        }else if(op == "sintacc"){
            msj = "Cualquier otro producto puede salir apto celíacos a pedido. =) "
        }else if(op == "tartas"){
            msj ="TARTAS"
        }else if(op == "burgers"){
            msj ="HAMBURGUESAS"
        }
    }

    return(
        <>
        <p className='alert'>{msj}</p>
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