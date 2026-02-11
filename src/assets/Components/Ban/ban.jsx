import React from "react";
import { useNavigate } from "react-router-dom";
import "./ban.css";

import avatar from "../../assets/image/user.png"; // foto do usuário

export const BanirUsuario = () => {
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
      <main className="admin-content banir-page">

        <h2 className="banir-title">Banir Usuario</h2>

        <input
          className="banir-input"
          type="text"
          placeholder="Insira o ID do usuario"
        />

        <span className="banir-subtitle">Encontrado</span>

        <div className="banir-card">
          <div className="banir-info">
            <span className="banir-name">nome</span>
            <span className="banir-email">
              fulano_do_chaos no exemplo
            </span>
            <span className="banir-id">id: 445889023</span>
          </div>

          <img src={avatar} alt="Usuário" className="banir-avatar" />
        </div>

        <button className="banir-btn">
          Confirmar
        </button>

      </main>

    </div>
  );
};
