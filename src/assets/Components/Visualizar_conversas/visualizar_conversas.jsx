import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./visualizar_conversas.css";

import user from "../../icons/usericon.png";
import contato1 from "../../icons/usericon.png";
import contato2 from "../../icons/usericon.png";



export const VisualizarMensagens = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("40028922");

  return (
    <div className="admin-container">

      {/* HEADER */}
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
      <main className="admin-content mensagens-page">

        <h2 className="mensagens-title">Visualizar Mensagens</h2>

        {/* INSTRUÇÃO */}
        <div className="mensagens-box">
          Insira o ID do usuario para ver suas mensagens
        </div>

        {/* BUSCA */}
        <div className="mensagens-search">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button>🔍</button>
        </div>

        {/* CARD USUÁRIO */}
        <div className="mensagens-user-card">
          <div>
            <p>nome: Juninho do desce e quebra</p>
            <p>id: {id}</p>
          </div>

          <img src={user} alt="usuario" />
        </div>

        {/* LISTA DM */}
        <h3 className="mensagens-subtitle">Interações na DM</h3>

        <div className="mensagens-list">

          <div className="mensagem-item">
            <img src={contato1} alt="" />
            <span>Makauli</span>
          </div>

          <div className="mensagem-item">
            <img src={contato2} alt="" />
            <span>Mc Pozinho</span>
          </div>

          <div className="mensagem-item">
            <img src={contato3} alt="" />
            <span>Mc Pozinho</span>
          </div>

        </div>

      </main>

    </div>
  );
};
