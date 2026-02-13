import React from "react";
import { useNavigate } from "react-router-dom";
import "./materiais.css";

import addMat from "../../assets/icons/usericon.png";
import addSub from "../../assets/icons/usericon.png";
import removeMat from "../../assets/icons/usericon.png";

export const GerenciarMateriais = () => {
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
      <main className="admin-content materiais-page">

        <h2 className="materiais-title">Gerenciar Materiais</h2>

        <div className="materiais-actions">

          <div
            className="materiais-card"
            onClick={() => navigate("/adicionar-material")}
          >
            <img src={addMat} alt="" />
            <span>Adicionar Materiais</span>
          </div>

          <div
            className="materiais-card"
            onClick={() => navigate("/adicionar-submaterial")}
          >
            <img src={addSub} alt="" />
            <span>Adicionar Submaterias</span>
          </div>

          <div
            className="materiais-card"
            onClick={() => navigate("/remover-material")}
          >
            <img src={removeMat} alt="" />
            <span>Remover Materiais</span>
          </div>

        </div>

      </main>

    </div>
  );
};
