import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import ButtonPerfil from "./ButtonPerfil";
import ButtonComida from "./ButtonComida";
import ButtonRopa from "./ButtonRopa";
import ButtonArtesanias from "./ButtonArtesanias";
import ButtonTiendas from "./ButtonTiendas";
import "../styles/Login.css";


function PaginaCategorias() {
  const navigate = useNavigate();
  const goToPerfil = () => {
    navigate("/Perfil");
  };
  
  const goToComida = () => {
    navigate("/Comida");
  };
  const goToRopa = () => {
    navigate("/Ropa");
  };
  const goToArtesanias = () => {
    navigate("/Artesanias");
  };
  const goToTiendas = () => {
    navigate("/Tiendas");
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
            <ButtonTiendas fnTiendas={goToTiendas}/>
            <ButtonRopa fnRopa={goToRopa}/>
        </div>
        <div className="cardDerecha">
            <ButtonComida fnComida={goToComida}/>
            <ButtonArtesanias fnArtesanias={goToArtesanias}/>
        </div>
    </div>
</div>
)
};
  
export default PaginaCategorias