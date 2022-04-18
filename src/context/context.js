import { createContext, useState } from "react";

export const contexto = createContext();

const {Consumer,Provider} = contexto;


const CustomProvider = ({children}) =>{

    const [itemsCarrito,setItem] = useState([]);

    //falta la condición para no superar el stock !!
    const addItem = (id,cantidad,name,price) => {
      
            let itemsCarritoCopy = [...itemsCarrito];
            //condicion para ver si el producto está en el carrito
            //si está guarda la cantidad anterior y borra el registro
            let cantidadPrevia = 0;
            if(isInCart(id) > 0){
                cantidadPrevia = isInCart(id);
                itemsCarritoCopy = deleteItem(id,itemsCarrito);
            }

            itemsCarritoCopy.push({"id":id,"cantidad":cantidad+cantidadPrevia, "name":name, "price":price});
            
            setItem(itemsCarritoCopy);

        
    };

    console.log(itemsCarrito);

    const deleteItem = (id,array) =>{
        console.log("función borrar");
        let newArray = array.filter((item) => item.id !== id);
        return newArray;
    };

    //chequea si está previamente en el carrito y devuelve la cantidad else zero
    const isInCart = (id) =>{
        const condicion = itemsCarrito.find(element => element.id === id);
        return(
        condicion ? condicion.cantidad : 0 
        )
        
    };
    const getCantidad = () => {
        
        let cantidad=0;
        itemsCarrito.forEach(element => {
            cantidad=cantidad+element.cantidad
        })
        return cantidad;
    };

    const update = (array) => {
        setItem(array)
    };

    //pasamos el state como parámetro value
    return (

     <Provider value={{itemsCarrito,addItem,deleteItem,getCantidad,update}}>{children}</Provider>
    )    
}

export default CustomProvider