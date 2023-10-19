import React from "react";

const ButtonRegisterNegocio = ({ label, fnRegistrarse }) => {
  return (
    <div>
      <button
        onClick={fnRegistrarse}
        className="btnRegistrarNegocio">{label} 
      </button>
    </div>
  );
};

export default ButtonRegisterNegocio;