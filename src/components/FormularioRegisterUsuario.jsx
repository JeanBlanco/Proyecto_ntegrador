import React, { useState } from "react";
import ButtonRegisterUsuario from "./ButtonRegisterUsuario";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegistrationSave from "./RegistrationSave";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import "../styles/RegistroUsuario.css";
import Swal from "sweetalert2";

const FormularioRegisterUsuario = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailU, setEmailU] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registrarse = async (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Apellido:", lastName);
    console.log("Correo:", emailU);
    console.log("Usuario:", user);
    console.log("Password:", password);

    const data = {
      nombre: name,
      apellido: lastName,
      email: emailU,
      usuario: user,
      password: password,
    };

    await axios
      .post("http://89.116.25.43:3500/api/usuarios/registrar", data)
      .then((resp) => {
        console.log(resp);  
        RegistrationSave();
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
        if (err.response.status == 400){
          Swal.fire("Información!", err.response.data.message, "Error");
        }else{
          Swal.fire("Información!", "Ocurrió un error!", "Error"); 
        }
      });
  };

  return (
    <div className="cardMain">
      <div className="cardTitulo">
          <img className="images" src={image4} alt="logo"/>
          <h1>Crea tu cuenta de usuario</h1>
          <img className="images" src={image5} alt="logo"/>
      </div>
      <div className="cardInputs">
        <div className="cardOrganizar">  
          <div className="card1">
              <h2>E-mail: </h2>
              <input className="ingresar" type="text" placeholder="Ingresa tu Email" onChange={(e)=> {setEmailU (e.target.value)}}/>
              <h2>Contraseña: </h2>
              <input className="ingresar" type="text" placeholder="Crea tu Contraseña" onChange={(e)=> {setPassword (e.target.value)}}/>
              <h2>Usuario: </h2>
              <input className="ingresar" type="text" placeholder="Crea tu Usuario" onChange={(e)=> {setUser (e.target.value)}}/>
              <h2>Fecha de Nacimiento: </h2>
              <input className="ingresar" type="text" placeholder="Ingresa Tu Fecha de Nacimiento"/>
              
              <h2>Dirección: </h2>
              <input className="ingresar" type="text" placeholder="Ingresa tu Dirección" onChange={(e)=> {setName (e.target.value)}}/>
             </div>

          <div className="card2">
            <div className="subCard">
              <div className="MiniOrganizar">
              <h2>Nombre: </h2>
              <input className="ingresarMini" type="text" placeholder="Ingresa Tu Nombre"/>
              </div>
              <div className="MiniOrganizar">
              <h2>Apellido: </h2>
              <input className="ingresarMini" type="text" placeholder="Ingresa Tu Apellido"/>
              </div>
            </div>
            <div className="telefono">
            <h2>Numero de Teléfono: </h2>
            <input className="ingresarTelefono" type="text" placeholder="Ingresa Tu Número de Teléfono"/>
            </div>
            <div className="subCard">
              <div className="MiniOrganizar">
                <h2>Tipo de Documento: </h2>
                <select className = "Tipo_Documento" id="Tipo_Documento">
                <option value="-">-</option>
                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>
              <div className="MiniOrganizar">
                <h2>Número de Documento: </h2>
                <input className="ingresarMini" type="text" placeholder="Ingresa Tu Documento"/>
              </div>
            </div>
            <h2>Género </h2>
            <select className="Genero" id="Género">
              <option value="-">-</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="No especifica">39 tipos de gay</option>
            </select>
            </div>
          </div>
          <div className="cardButton">
          <img className="images" src={image7} alt="logo"/>
            <ButtonRegisterUsuario fnRegistrarse={registrarse} label="Registrarse" />
            <img className="images" src={image6} alt="logo"/>
          </div>
      </div>  
    </div>
  );
};

export default FormularioRegisterUsuario;