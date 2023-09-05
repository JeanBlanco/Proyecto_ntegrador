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

const FormularioRegisterUsuario = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailU, setEmailU] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registarse = async (e) => {
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
        console.log(error);
      });
  };

  return (
    <div className="cardMain">
      <div className="cardTittle">
          <img className="images" src={image4} alt="logo"/>
          <h1>Crea tu cuenta de usuario</h1>
          <img className="images" src={image5} alt="logo"/>
      </div>
      <div className="cardForm">
        
        <div className="cardOrganizar">  
          <div className="card1">
              <h2>Nombre: </h2>
              <input className="inputs" type="text" placeholder="Ingresa tu Nombre" onChange={(e)=> {setName (e.target.value)}}/>
              <h2>Apellido: </h2>
              <input className="inputs" type="text" placeholder="Ingresa tu Apellido" onChange={(e)=> {setLastName (e.target.value)}}/>
          </div>
          <div className="card2">
              <h2>E-mail: </h2>
              <input className="inputs" type="text" placeholder="Ingresa tu Email" onChange={(e)=> {setEmailU (e.target.value)}}/>
              <h2>Usuario: </h2>
              <input className="inputs" type="text" placeholder="Crea tu Usuario" onChange={(e)=> {setUser (e.target.value)}}/>
          </div>
          </div>
          
          <div className="card3">
              <h2>Contraseña: </h2>
              <input className="inputs" type="text" placeholder="Crea tu Contraseña" onChange={(e)=> {setPassword (e.target.value)}}/>
          </div>
          <div className="cardButton">  
            <img className="images" src={image7} alt="logo"/>
            <ButtonRegisterUsuario fnRegistarse={registarse} label="Registrarse" />
            <img className="images" src={image6} alt="logo"/>
          </div>
      </div>  
    </div>
  );
};

export default FormularioRegisterUsuario;