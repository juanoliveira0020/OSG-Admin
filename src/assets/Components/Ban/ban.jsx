import React from "react";
import "./ban.css";

import avatar from "../../icons/usericon.png";

export const BanirUsuario = () => {
  return (
    <div className="admin-container">

      {/* HEADER */}
      <header className="admin-header">
        <h1>Online study group</h1>

        <div className="admin-search">
          <input type="text" placeholder="Pesquisar..." />
        </div>

        <div className="admin-user">👤</div>
      </header>

      {/* CONTEÚDO */}
      <main className="admin-content banir-page">

        <h2 className="banir-title">Banir Usuario</h2>

        {/* CARD INPUT */}
        <div className="banir-input-card">
          Insira o ID do usuario
        </div>

        {/* INPUT BUSCA */}
        <div className="banir-search">
          <input type="text" value="40028922" readOnly />
          <span className="banir-search-icon">🔍</span>
        </div>

        {/* CARD USUÁRIO */}
        <div className="banir-card">
          <div className="banir-info">
            <span className="banir-name">
              nome: Juninho do desce e quebra
            </span>
            <span className="banir-id">
              id:40028922
            </span>
          </div>

          <img src={avatar} alt="Usuário" className="banir-avatar" />
        </div>

        <button className="banir-btn">Confirmar</button>

      </main>
    </div>
  );
};
