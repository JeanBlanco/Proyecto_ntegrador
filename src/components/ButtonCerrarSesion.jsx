import React from "react";

const ButtonCerrarSesion = ({fnCerrarSesion, label}) => {
    return (  
        <button onClick={fnCerrarSesion} className ="btnCerrarSesion"></button>
    );
}
 
export default ButtonCerrarSesion;