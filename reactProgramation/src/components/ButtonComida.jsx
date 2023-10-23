import React from "react";

const ButtonComida = ({fnComida, label}) => {
    return (  
        <button onClick={fnComida} className ="btnComida">Comidas</button>
    );
}
 
export default ButtonComida;