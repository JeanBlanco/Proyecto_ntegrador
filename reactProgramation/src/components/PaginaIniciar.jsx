import logo from '../assets/logos copia.png';
import Papitas from "../assets/Papitas.png";
import Ropa from "../assets/Ropa.png";
import Variedad from "../assets/Variedad.png";
import ButtonInicio from "../components/ButtonInicio";
import { useNavigate } from "react-router-dom";
import "../styles/PaginaIniciar.css";


function PaginaIniciar() {
  const navigate = useNavigate();
  const goToLittlePlace = () => {
    navigate("/Login");
  };
  

  return (
     <div>
        <div className='PrincipalInicio'>
        <img className="logoInicio" src={logo} alt="logo"/>
        
        <h1>¿Dónde quieres ir hoy?</h1>
        <div className='FilaImg'>
            <img className="Papitas" src={Papitas} alt="Papitas"/>
            <img className="Ropa" src={Ropa} alt="Ropa"/>
            <img className="Variedad" src={Variedad} alt="Variedad"/>
            
        </div>
        <ButtonInicio fnInicio={goToLittlePlace} label="Ingresar" />
        </div>
       
    </div>
    )
  }
export default PaginaIniciar;