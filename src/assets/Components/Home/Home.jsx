import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import banner from "../../icons/usericon.png";// imagem central
import monitor from "../../icons/usericon.png"
import perguntas from "../../icons/usericon.png";
import materiais from "../../icons/usericon.png";
import banir from "../../icons/usericon.png";
import admin from "../../icons/usericon.png"

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">

      {/* TOPO */}
      <header className="admin-header">
        <h1>Online study group</h1>

        <div className="admin-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="admin-user">
          <span>👤</span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="admin-content">

        {/* BANNER */}
        <div className="admin-banner">
          <img src={banner} alt="Banner estudo" />
        </div>

        {/* AÇÕES */}
        <h2 className="admin-title">Ações Possíveis</h2>

        <div className="admin-actions">

          <div className="admin-action" onClick={() => navigate("/monitorar")}>
            <img src={monitor} alt="" />
            <span>Monitorar Conversas</span>
          </div>

          <div className="admin-action" onClick={() => navigate("/perguntas")}>
            <img src={perguntas} alt="" />
            <span>Gerenciar Perguntas</span>
          </div>

          <div className="admin-action" onClick={() => navigate("/materiais")}>
            <img src={materiais} alt="" />
            <span>Gerenciar Materiais</span>
          </div>

          <div className="admin-action danger" onClick={() => navigate("/banir")}>
            <img src={banir} alt="" />
            <span>Banir Usuários</span>
          </div>

          <div className="admin-action" onClick={() => navigate("/novo-admin")}>
            <img src={admin} alt="" />
            <span>Adicionar Novo Administrador</span>
          </div>

        </div>
      </main>

    </div>
  );
};
