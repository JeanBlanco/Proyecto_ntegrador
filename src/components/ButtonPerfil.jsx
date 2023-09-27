import React from "react";

const ButtonPerfil = ({fnPerfil, label}) => {
    return (  
        <button onClick={fnPerfil} className ="btnPerfil"></button>
    );
}
 
export default ButtonPerfil;