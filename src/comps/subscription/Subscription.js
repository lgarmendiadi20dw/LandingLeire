
import React, { useState } from "react"
import './Subscription.css'

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar sesión</h3>
            <div className="text-center">
            ¿Aún no tienes una cuenta?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
              Registrarse
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Correo Electrónico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Introduce tu correo electronico"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Introduce tu contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
            <p className="text-center mt-2">
               <a href="#">¿Has olvidado tu contraseña?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Únete a Sesach</h3>
          <div className="text-center">
          Si ya tienes una cuenta,{" "}
            <span className="link-primary" onClick={changeAuthMode}>
            Iniciar sesión
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nombre de usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Introduce tu nombre de usuario"
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Introduce tu correo electronico"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Nueva contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
         
        </div>
      </form>
    </div>
  )
}