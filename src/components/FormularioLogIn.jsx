import React, { useState } from 'react';
import logo from '../assets/logos copia.png';
import ButtonLogin from "../components/ButtonLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonGoToRegisterUsuario from "./ButtonGoToRegisterUsuario";
import ButtonGoToRegisterNegocio from "./ButtonGoToRegisterNegocio";

import Swal from "sweetalert2";
import "../styles/Login.css";


function FormularioLogIn() {
  const [usuario, setUsuario] = useState ("");
  const [password, setPassword] = useState ("");
  const [error, setError] = useState ("");
  const navigate = useNavigate();
  const goToRegisterUsuario = () => {
    navigate("/RegisterUsuario");
  };
  
  const goToRegisterNegocio = () => {
    navigate("/RegisterNegocio");
  };

  const inicioSesion = async (e) => {
    e.preventDefault()
    console.log("Usuario: ", usuario)
    console.log("Password: ", password);


    const data = {
      usuario: usuario,
      password: password,
    };

  await axios
      .post("http://89.116.25.43:3500/api/login", data)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.jwt);
        localStorage.setItem("user", resp.data.user);
        localStorage.setItem("username", resp.data.user.usuario);
        localStorage.setItem("nombre", resp.data.user.nombre);
        navigate("/Categorias");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400 || err.response.status == 404) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  return (
     <div>
       <div className="main">
          <div className="cardPrincipal">
            <div className="cardTittle">
                <h1>Bienvenido a Little Place</h1>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="cardForm">
                <div className="input_user">
                    <h2>Usuario</h2>
                    <input className="inputs" type="text" placeholder="Ingresa tu E-mail"
                    onChange={(e)=> {setUsuario (e.target.value)}}/>
                </div>
                <div className="input_pass">
                    <h3>Contraseña</h3>
                    <button className="btnOlvido">¿Olvidaste tu contraseña?</button>
                    <input className="inputs" type="password" placeholder="Ingresa tu contraseña"
                    onChange={(e)=> {setPassword (e.target.value)}}/>
                </div>
                <ButtonLogin fnInicioSesion={inicioSesion} label="Ingresar" />
                {error && <p className='text-red-500'>{error}</p>}
                <h4>¿Todavía no tienes una cuenta?</h4>
                <div className="cardCrear">
                    <h4>Crear como:</h4>
                    <ButtonGoToRegisterUsuario fnIrARegistroUsuario={goToRegisterUsuario} label="Registarse" />
                    <h4>O</h4>
                    <ButtonGoToRegisterNegocio fnIrARegistroNegocio={goToRegisterNegocio} label="Registarse" />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default FormularioLogIn
