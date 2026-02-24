import React, { useState } from "react";
import "./visualizar_conversas.css";

import user from "../../icons/usericon.png";
import contato1 from "../../icons/usericon.png";
import contato2 from "../../icons/usericon.png";
import contato3 from "../../icons/usericon.png";

export const VisualizarMensagens = () => {
  const [id, setId] = useState("40028922");

  return (
    <div className="page">

      {/* HEADER */}
      <header className="header">
        <div className="logo">Online study group</div>

        <div className="search">
          <span>🏠</span>
          <input placeholder="Pesquisar..." />
          <span>🔍</span>
        </div>

        <div className="profile">👤</div>
      </header>

      {/* CONTEUDO */}
      <main className="main">

        <h1 className="title">Visualizar Mensagens</h1>

        <div className="box">
          Insira o ID do usuario para ver suas mensagens
        </div>

        <div className="search-id">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button>🔎</button>
        </div>

        <div className="user-card">
          <div>
            <p>nome: Juninho do desce e quebra</p>
            <p>id:{id}</p>
          </div>
          <img src={user} alt="" />
        </div>

        <h3 className="subtitle">Interações na DM</h3>

        <div className="list">
          <div className="item">
            <img src={contato1} alt="" />
            <span>Makauli</span>
          </div>

          <div className="divider"></div>

          <div className="item">
            <img src={contato2} alt="" />
            <span>Mc Pozinho</span>
          </div>

          <div className="divider"></div>

          <div className="item">
            <img src={contato3} alt="" />
            <span>Mr Pozinho</span>
          </div>
        </div>

      </main>
    </div>
  );
};