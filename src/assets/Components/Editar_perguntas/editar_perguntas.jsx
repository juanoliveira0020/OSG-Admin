import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./editar_perguntas.css";

export const EditarPerguntas = () => {
  const navigate = useNavigate();

  const [perguntas, setPerguntas] = useState([
    "Qual é a fórmula da área do círculo?",
    "Quem proclamou a independência do Brasil?",
    "Qual é o resultado de 2x + 5 = 15?",
    "O que é fotossíntese?",
    "Qual a capital da França?",
    "Qual é o símbolo químico do ouro?",
    "Em que ano ocorreu a Revolução Francesa?"
  ]);

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
      <main className="admin-content editar-perguntas-page">

        <div className="editar-card">

          <h2 className="editar-title">Editar Perguntas</h2>

          {/* SELECTS */}
          <select className="editar-select">
            <option>Escolha a materia</option>
          </select>

          <select className="editar-select small">
            <option>Escolha a submateria</option>
          </select>

          <p className="editar-subtitle">
            selecione a pergunta que deseja editar
          </p>

          {/* LISTA */}
          <div className="editar-list">
            {perguntas.map((p, i) => (
              <input key={i} value={p} readOnly />
            ))}
          </div>

          <button className="editar-btn">
            Confirmar
          </button>

        </div>

      </main>

    </div>
  );
};
