import React from "react";
import styleButtonLogin from "../styles/styleBottonLogin.css";

const ButtonLogin = ({fnInicioSesion, label}) => {
    return (  
        <button onClick={fnInicioSesion} className ="btnIniciar">Iniciar Sesión</button>
    );
}
 
export default ButtonLogin;