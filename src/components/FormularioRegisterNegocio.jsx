import React, { useState } from "react";
import ButtonRegisterNegocio from "./ButtonRegisterNegocio";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegistrationSave from "./RegistrationSave";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import "../styles/RegistroNegocio.css";

const FormularioRegisterNegocio = () => {
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
          <h1>Crea tu cuenta de Negocio</h1>
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
              <h2>Fecha de  Inauguración: </h2>
              <input className="ingresar" type="text" placeholder="Ingresa La fecha de inauguración"/>
              <h2>Nombre del Propietario: </h2>
              <input className="ingresar" type="text" placeholder="Ingresa tu Nombre" onChange={(e)=> {setName (e.target.value)}}/>
              <h2>Apellido del Propietario: </h2>
              <input className="ingresar" type="text" placeholder="Ingresa tu Apellido" onChange={(e)=> {setLastName (e.target.value)}}/>
          </div>

          <div className="card2">
            <div className="telefono">
            <h2>Numero de Teléfono: </h2>
            <input className="ingresarGrande" type="text" placeholder="Ingresa Tu Número de Teléfono"/>
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
            <h2>Registro Único Empresarial </h2>
            <input className="ingresarGrande" type="text" placeholder="Ingresa el RUN"/>
            <h2>Dirección: </h2>
            <input className="ingresarGrande" type="text" placeholder="Ingresa La Dirección del Negocio"/>
          </div>
          </div>
          <div className="cardButton">
          <img className="images" src={image7} alt="logo"/>
            <ButtonRegisterNegocio fnRegistrarse={registrarse} label="Registrarse" />
            <img className="images" src={image6} alt="logo"/>
          </div>
      </div>  
    </div>
  );
  };

export default FormularioRegisterNegocio;