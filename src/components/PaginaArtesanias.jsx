import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import ButtonPerfil from "./ButtonPerfil";
import "../styles/Login.css";
import publimc from "../assets/publicidadMc.png";
import publiSpotify from "../assets/publicidadSpotify.png";
import publi3 from "../assets/Publicidad3.png";
import publiNike from "../assets/PublicidadNike.png";
import arte1 from "../assets/arte1.png";
import arte2 from "../assets/arte2.jpg";
import arte3 from "../assets/arte3.webp";
import arte4 from "../assets/arte4.jpg";


function PaginaArtesanias() {
  const navigate = useNavigate();
  const goToPerfil = () => {
    navigate("/Perfil");
  };
  
  return (
    <div className="Principal1">
    <div className="cardEncabezado">
        <img className="logoCategorias" src={logoCategorias} alt="logoCategorias"/>
        <h2>Little Place</h2>
        <h1>Artesanías</h1>
        <ButtonPerfil fnPerfil={goToPerfil}/>
    </div>
    <div className="cardTotal">
    <div className="cardContenido">
        <scroll-container>
            <img className="cardContenido" src={arte1}/>
            <img className="cardContenido" src={arte2}/>
            <img className="cardContenido" src={arte3}/>
            <img className="cardContenido" src={arte4}/>
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
  
export default PaginaArtesanias