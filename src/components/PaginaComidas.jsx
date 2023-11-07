import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import ButtonPerfil from "./ButtonPerfil";
import "../styles/Login.css";
import publimc from "../assets/publicidadMc.png";
import publiSpotify from "../assets/publicidadSpotify.png";
import publi3 from "../assets/Publicidad3.png";
import publiNike from "../assets/PublicidadNike.png";
import imagenPerfil1 from "../assets/imagen_cafe_cepelin.png";


function PaginaComida() {
  const navigate = useNavigate();
  const goToPerfil = () => {
    navigate("/Perfil");
  };
  
  return (
    <div className="Principal1">
    <div className="cardEncabezado">
        <img className="logoCategorias" src={logoCategorias} alt="logoCategorias"/>
        <h2>Little Place</h2>
        <h1>Comidas</h1>
        <ButtonPerfil fnPerfil={goToPerfil}/>
    </div>
    <div className="cardTotal">
    <div className="cardContenido">
        <scroll-container>
            <img src={imagenPerfil1}/>
            <img src={publiNike}/>
            <ButtonGoTienda fnPerfil={goToPerfil}/>
            <scroll-page id="page-3">contenido 3</scroll-page>
        </scroll-container>
        </div>
        <div id="carrusel-contenido">
            <div id="cardAdds">
                <img className="Adds" src={publimc}/>
                <img className="Adds" src={publiSpotify}/>
                <img className="Adds" src={publi3}/>
                <img className="Adds" src={publiNike}/>
            </div>
        </div>
    </div>
</div>
)
};
  
export default PaginaComida