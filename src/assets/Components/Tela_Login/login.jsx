import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import logo from "../../icons/icon_Osg.png";

export const Tela_login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // aqui depois você pode validar login
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* LOGO / LADO ESQUERDO */}
        <div className="login-left">
          <img src={logo} alt="Online Study Group" />
          <h2>Faça login ADM!</h2>
        </div>

        {/* FORMULÁRIO */}
        <div className="login-right">
          <input
            type="text"
            placeholder="Gmail ou telefone"
          />

          <input
            type="password"
            placeholder="Senha"
          />

          <div className="login-links">
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Entrar
          </button>

        </div>

      </div>
    </div>
  );
};