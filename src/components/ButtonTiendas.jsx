import React from "react";

const ButtonTiendas = ({fnTiendas, label}) => {
    return (  
        <button onClick={fnTiendas} className ="btnTiendas">Tiendas</button>
    );
}
 
export default ButtonTiendas;