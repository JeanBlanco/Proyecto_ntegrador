import React from "react";

const ButtonRegisterUsuario = ({ label, fnRegistrarse }) => {
  return (
    <div>
      <button
        onClick={fnRegistrarse}
        className="btnRegistrarUsuario">Registrarme 
      </button>
    </div>
  );
};

export default ButtonRegisterUsuario;