import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import ButtonPerfil from "./ButtonPerfil";
import "../styles/Login.css";
import publimc from "../assets/publicidadMc.png";
import publiSpotify from "../assets/publicidadSpotify.png";
import publi3 from "../assets/Publicidad3.png";
import publiNike from "../assets/PublicidadNike.png";
import tienda1 from "../assets/tienda1.avif";
import tienda2 from "../assets/tienda2.jpeg";
import tienda3 from "../assets/tienda3.jpg";
import tienda4 from "../assets/tienda4.jpeg";


function PaginaTiendas() {
  const navigate = useNavigate();
  const goToPerfil = () => {
    navigate("/Perfil");
  };

  return (
    <div className="Principal1">
    <div className="cardEncabezado">
        <img className="logoCategorias" src={logoCategorias} alt="logoCategorias"/>
        <h2>Little Place</h2>
        <h1>Tiendas</h1>
        <ButtonPerfil fnPerfil={goToPerfil}/>
    </div>
    <div className="cardTotal">
    <div className="cardContenido">
        <scroll-container>
            <img className="cardContenido" src={tienda1}/>
            <img className="cardContenido" src={tienda2}/>
            <img className="cardContenido" src={tienda3}/>
            <img className="cardContenido" src={tienda4}/>
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
  
export default PaginaTiendas