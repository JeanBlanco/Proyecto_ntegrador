import React from "react";

const ButtonGoToRegisterUsuario = ({ fnIrARegistroUsuario, label }) => {
  return (
  
      <button onClick={fnIrARegistroUsuario} className="btnUsuario">Usuario 
      </button>
 
  );
};

export default ButtonGoToRegisterUsuario;