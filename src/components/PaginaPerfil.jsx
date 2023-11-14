import { useNavigate } from "react-router-dom";
import logoCategorias from "../assets/logos copia.png";
import menu from "../assets/menú.avif"
import imagen1 from "../assets/Imagen1.jpg"
import imagen2 from "../assets/Imagen2.jpg"
import imagen3 from "../assets/Imagen3.jpg"
import imagen4 from "../assets/Imagen4.jpg"
import imagen5 from "../assets/Imagen5.jpg"
import imagen6 from "../assets/Imagen6.jpg"
import imagen7 from "../assets/Imagen7.jpg"
import IconoSubirPortada from "../assets/subirPortada.jpeg";
import IconoSubirPerfil from "../assets/SubirImagenPerfil.jpg";
import ButtonCerrarSesion from "./ButtonCerrarSesion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../styles/Perfil.css";
import { useState, useEffect  } from "react";
import Dropzone from "react-dropzone";

  

function PaginaPerfil() {
  const usuario = localStorage.getItem("username");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  function UploadPortada() {
    const [uploadedImagePortada, setUploadedImagePortada] = useState(null);
    let imageSessionPortada = sessionStorage.getItem('imagePortada');
    console.log(imageSessionPortada);
   
    useEffect(() => {
      setUploadedImagePortada();
    }, []);
  
   
  
    const handleDrop = (acceptedFiles) => {
      const imagePortada = acceptedFiles[0];
      setUploadedImagePortada(URL.createObjectURL(imagePortada));
      sessionStorage.setItem("imagePortada", URL.createObjectURL(imagePortada));
      console.log(URL.createObjectURL(imagePortada));
    };
  
    return (
      <div>
        {
          imageSessionPortada == null ?(
            <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <img className="imgSubirPortada" src={IconoSubirPortada} alt="Subir archivo" />
            </div>
           )}
          </Dropzone>
          ):(
              <div className="dropzone">
                <img className="ImagenPortada" src={imageSessionPortada} alt="Subir archivo" />
              </div>
          )
  }
       
      </div>
    );
  }

  function UploadPerfil() {
    const [uploadedImagePerfil, setUploadedImagePerfil] = useState(null);
    let imageSessionPerfil = sessionStorage.getItem('imagePerfil');
    console.log(imageSessionPerfil);
   
    useEffect(() => {
      setUploadedImagePerfil();
    }, []);
  
   
  
    const handleDrop = (acceptedFiles) => {
      const imagePerfil = acceptedFiles[0];
      setUploadedImagePerfil(URL.createObjectURL(imagePerfil));
      sessionStorage.setItem("imagePerfil", URL.createObjectURL(imagePerfil));
      console.log(URL.createObjectURL(imagePerfil));
    };
  
    return (
      <div>
        {
          imageSessionPerfil == null ?(
            <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <img className="imgSubirPerfil" src={IconoSubirPerfil} alt="Subir archivo" />
            </div>
           )}
          </Dropzone>
          ):(
              <div className="dropzone">
                <img className="ImagenPerfil" src={imageSessionPerfil} alt="Subir archivo" />
              </div>
          )
  }
        {uploadedImagePerfil && (
          <div>
            <img className="ImagenPerfil" src={uploadedImagePerfil} alt="Imagen de perfil" />
          </div>
        )}
      </div>
    );
  }


  const pregunta = () => {
    MySwal.fire({
     title: `¿Está seguro que desea Cerrar Sesión?`,
     showCancelButton: true,
     confirmButtonText: "Si",
   }).then((result) => {
       if (result.isConfirmed) {
         //Accion en caso de que elijan el SI 
            navigate("/Login");
       }
   });
}

  return (
    <div className="Total">
    <div className="cardEncabezado1">
        <div className="izquierda">
            <img className="logoCategorias1" src={logoCategorias} alt="logoCategorias1"/>
            <h2>{usuario}</h2>
        </div>
        <div className="centro">
            <h1>Perfil</h1>
        </div>
        <div className="derecha">
            <ButtonCerrarSesion fnCerrarSesion={pregunta}/>
        </div>
        
    </div>
    <div className="cardGrande2">
        <div className="ImagenPortada">
            <UploadPortada/>
        </div>

        <div className="ImagenPerfil">
            <UploadPerfil/>
        </div>
        
        <label className="descripcion"> Horario de Atención</label>
        <label className="descripcion"> Lunes a Viernes: 7:00 AM -- 8:00 PM </label>
        <label className="descripcion"> Sábados, Domingos y Festivos: 9:00 AM -- 4:00 PM </label>
        <label className="direccion">Tv 39 #73b-95 a 73b-1, Laureles - Estadio, Medellín, Laureles, Medellín, Antioquia</label>
        <a className ="direccion" href = "https://www.google.com/maps/place/Caf%C3%A9+Zeppelin/@6.2463377,-75.600114,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44299f7d809b6d:0x86ccf77109148212!8m2!3d6.2463324!4d-75.5975391!16s%2Fg%2F11ckqt10f3?hl=es&entry=ttu">Ver en Maps</a>
        <label className="slogan"> "Trabajamos por ti..." </label>
        <a className ="direccion" href = "https://wa.me/message/AZPVHZMDCICXK1">Contáctanos</a>
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