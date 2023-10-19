import React from "react";
import styleButtonLogin from "../styles/styleBottonLogin.css";

const ButtonInicio = ({fnInicio, label}) => {
    return (  
        <button onClick={fnInicio} className ="btnInicio">Iniciar</button>
    );
}
 
export default ButtonInicio;