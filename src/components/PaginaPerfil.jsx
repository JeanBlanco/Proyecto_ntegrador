import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import ImagenPerfil from "../assets/ImagenPerfil.jpg"
import ImagenPortada from "../assets/portadaBonita.jpg"
import menu from "../assets/menú.avif"
import imagen1 from "../assets/Imagen1.jpg"
import imagen2 from "../assets/Imagen2.jpg"
import imagen3 from "../assets/Imagen3.jpg"
import imagen4 from "../assets/Imagen4.jpg"
import imagen5 from "../assets/Imagen5.jpg"
import imagen6 from "../assets/Imagen6.jpg"
import imagen7 from "../assets/Imagen7.jpg"
import "../styles/Perfil.css";


function PaginaPerfil() {
  const usuario = localStorage.getItem("nombre");

  return (
    <div className="Total">
    <div className="cardEncabezado1">
        <img className="logoCategorias" src={logoCategorias} alt="logoCategorias"/>
        <h2>{usuario}</h2>
        <h1>Perfil</h1>
       <div className="opciones" >
        <select id="Opciones">
              <option value="=">=</option>
              <option value="Ajustes">Ajustes</option>
              <option value="Cerrar Sesion">Cerrar Sesión</option>
        </select>
        </div>
    </div>
    <div className="cardGrande2">
        <img className="ImagenPortada" src={ImagenPortada} alt="ImagenPortada"/>
        <img className="ImagenPerfil" src={ImagenPerfil} alt="ImagenPerfil"/>
        <label className="descripcion"> Horario de Atención</label>
        <label className="descripcion"> Lunes a Viernes: 7:00 AM -- 8:00 PM </label>
        <label className="descripcion"> Sábados, Domingos y Festivos: 9:00 AM -- 4:00 PM </label>
        <label className="direccion">Tv 39 #73b-95 a 73b-1, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia</label>
        <a className ="direccion" HREF = "https://www.google.com/maps/place/Caf%C3%A9+Zeppelin/@6.2463377,-75.600114,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44299f7d809b6d:0x86ccf77109148212!8m2!3d6.2463324!4d-75.5975391!16s%2Fg%2F11ckqt10f3?hl=es&entry=ttu">Ver en Maps</a>
        <label className="slogan"> "Trabajamos por ti..." </label>
        
        <div className="cardImagenes">
            <scroll-container>
                <img className="imagen"src={menu} alt="Imagen"/>
                <img className="imagen"src={imagen1} alt="Imagen"/>
                <img className="imagen"src={imagen2} alt="Imagen"/>
                <img className="imagen"src={imagen3} alt="Imagen"/>
                <img className="imagen"src={imagen4} alt="Imagen"/>
                <img className="imagen"src={imagen5} alt="Imagen"/>
                <img className="imagen"src={imagen6} alt="Imagen"/>
                <img className="imagen"src={imagen7} alt="Imagen"/>
            </scroll-container>
        </div>
  

    </div>
</div>
)
};
  
export default PaginaPerfil