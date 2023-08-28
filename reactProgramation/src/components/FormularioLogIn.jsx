import React from 'react'
import logo from '../assets/logos copia.png'
import '../styles/login.css'

const FormularioLogIn = () => {
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
                    <h2>E-mail</h2>
                    <input className="inputs" type="text" placeholder="Ingresa tu E-mail"/>
                </div>
                <div className="input_pass">
                    <h3>Contraseña</h3>
                    <button className="btnOlvido">¿Olvidaste tu contraseña?</button>
                    <input className="inputs" type="text" placeholder="Ingresa tu contraseña"/>
                </div>
                <button className="btnIniciar">Iniciar Sesión</button>
                <h4>¿Todavía no tienes una cuenta?</h4>
                <div className="cardCrear">
                    <h4>Crear como:</h4>
                    <button className="btnUsuario">Usuario</button>
                    <h4>O</h4>
                    <button className="btnNegocio">Negocio</button>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FormularioLogIn
