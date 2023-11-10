import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import ButtonPerfil from "./ButtonPerfil";
import "../styles/Login.css";
import publimc from "../assets/publicidadMc.png";
import publiSpotify from "../assets/publicidadSpotify.png";
import publi3 from "../assets/Publicidad3.png";
import publiNike from "../assets/PublicidadNike.png";
import ropa1 from "../assets/ropa1.jpg";
import ropa2 from "../assets/ropa2.jpg";
import ropa3 from "../assets/ropa3.jpg";
import ropa4 from "../assets/ropa4.jpg";


function PaginaRopa() {
  const navigate = useNavigate();
  const goToPerfil = () => {
    navigate("/Perfil");
  };
  
  return (
    <div className="Principal1">
    <div className="cardEncabezado">
        <img className="logoCategorias" src={logoCategorias} alt="logoCategorias"/>
        <h2>Little Place</h2>
        <h1>Ropa</h1>
        <ButtonPerfil fnPerfil={goToPerfil}/>
    </div>
    <div className="cardTotal">
    <div className="cardContenido">
        <scroll-container>
            <img className="cardContenido" src={ropa1}/>
            <img className="cardContenido" src={ropa2}/>
            <img className="cardContenido" src={ropa3}/>
            <img className="cardContenido" src={ropa4}/>
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
  
export default PaginaRopa