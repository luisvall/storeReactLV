import { useEffect, useRef, useState, useContext } from "react";
import "./LoginPage.css";
import { consumoApi } from "../components/api";
import { LogContext } from "../components/LogContext";

export default function LoginPage() {
  const {setIsLoged, isLoged} = useContext(LogContext)
  const usersAPI = consumoApi()[0];

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const isAuthenticated = usersAPI.some(
      (element) => element.user === data.user
    );
    if(isAuthenticated){
      const pass = usersAPI.find( element => data.user).pass.toString() === data.pass;
      console.log(pass);
      setIsLoged(pass);
    } else {
      console.log("Usuario incorrecto");
      setIsLoged(false)
    }
  }

  return (
    <section className="section">
      <div className="container containerCenter">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>{ isLoged ? 'Logeado' : 'Login...' }</h1>
          <div className="loginAvatar">
            <img
              className="loginAvatar"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              alt="Avatar image"
            />
          </div>
          <div className="loginMail">
            <label>Correo electrónico</label>
            <input
              name="user"
              type="email"
              placeholder="mail@mail.com"
              required
            />
          </div>
          <div className="loginPassword">
            <label htmlFor="">Contraseña</label>
            <input
              name="pass"
              type="password"
              placeholder="contraseña"
              required
            />
          </div>
          <button>Iniciar sesión</button>
          <button className="loginExitBtn" onClick={(event)=>{event.preventDefault() ;setIsLoged(false)}}>Cerar sesión</button>
        </form>
      </div>
    </section>
  );
}
