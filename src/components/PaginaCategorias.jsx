import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import ButtonPerfil from "./ButtonPerfil";
import "../styles/Login.css";


function PaginaCategorias() {
  const navigate = useNavigate();
  const goToPerfil = () => {
    navigate("/dashboard");
  };
  
  

  return (
    <div className="Principal">
    <div className="cardEncabezado">
        <img className="logoCategorias" src={logoCategorias} alt="logoCategorias"/>
        <h2>Little Place</h2>
        <h1>Categorías</h1>
        <ButtonPerfil fnPerfil={goToPerfil}/>
    </div>
    <div className="cardGrande">
        <div className="cardIzquierda">
            <button className="btnElectro">Electrodomésticos</button>
            <button className="btnFruteria">Fruterías</button>
            <button className="btnTiendas">Tiendas</button>
        </div>
        <div className="cardDerecha">
            <button className="btnRopa">Ropa</button>
            <button className="btnComida">Comida</button>
            <button className="btnArtesanias">Artesanías</button>
        </div>
    </div>
</div>
)
};
  
export default PaginaCategorias