import React, {useState} from "react";

const CustomButton = ({ title,color,letra}) => {


    // let resultado = useState();
    //const contador = resultado[0];
    //const setContador = resultado[1];
    //destructurado
    const [contador,setContador] = useState(0);



    const buttonColor = color === "primary"

    ? ("blue")
    :(color === "secondary"
        ? ("green")
        :(color === "danger"
            ? ("red")
            :("yellow")
        )
    )

    const sizeLetra = letra || 16;

    const buttonStyles = {
        backgroundColor: buttonColor,
        fontSize: sizeLetra,
        padding: 5,
        height: 40,
        width: 120
    };



    //evento
    const sumador = () =>{
        setContador(contador + 1)
    }

    const restador = () =>{
        if (contador>0){
            setContador(contador - 1)
        }
        
    }

    return(
        <>
        <h1>{contador}</h1>
        <button onClick={sumador} style={buttonStyles}  >Suma</button>
        <button onClick={restador} style={buttonStyles}  >Resta</button>
        </>
    ) 
    
};

export default CustomButton;