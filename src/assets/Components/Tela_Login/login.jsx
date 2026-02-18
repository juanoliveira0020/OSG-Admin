import React from "react";
import "./login.css";

import logo from "../../icons/icon_Osg.png" // use sua logo real

export const Tela_login = () => {
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

          <button className="login-btn">
            Entrar
          </button>

          <p className="login-register">
            Não tem conta? <span>Cadastre-se</span>
          </p>
        </div>

      </div>
    </div>
  );
};
