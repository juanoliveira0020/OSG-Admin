import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import avatar from "../../assets/image/user.png";

export const NovoAdmin = () => {
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
      <main className="admin-content novo-admin-page">

        <div className="novo-admin-card">

          <div className="novo-admin-avatar">
            <img src={avatar} alt="Avatar" />
            <span>Adicionar foto</span>
          </div>

          <div className="novo-admin-form">

            <input type="text" placeholder="Nome do admin" />

            <input type="email" placeholder="Email" />

            <div className="novo-admin-actions">
              <button className="btn-cancel" onClick={() => navigate(-1)}>
                Cancelar
              </button>

              <button className="btn-save">
                Salvar
              </button>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};
