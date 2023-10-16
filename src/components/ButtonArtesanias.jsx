import React from "react";

const ButtonArtesanias = ({fnArtesanias, label}) => {
    return (  
        <button onClick={fnArtesanias} className ="btnArtesanias">Artesanias</button>
    );
}
 
export default ButtonArtesanias;