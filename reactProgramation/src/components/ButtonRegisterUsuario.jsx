import React from "react";

const ButtonRegisterUsuario = ({ label, fnRegistrarse }) => {
  return (
    <div>
      <button
        onClick={fnRegistrarse}
        className="btnRegistrarUsuario">{label} 
      </button>
    </div>
  );
};

export default ButtonRegisterUsuario;