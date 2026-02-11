import React, { useState } from "react";
import "./remover_perguntas.css";

export const RemoverPerguntas = () => {
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);

  const perguntas = [
    "Qual é a fórmula da área do círculo?",
    "Quem proclamou a independência do Brasil?",
    "Qual é o resultado de 2x + 5 = 15?",
    "O que é fotossíntese?",
    "Qual a capital da França?",
    "Qual é o símbolo químico do ouro?",
    "Em que ano ocorreu a Revolução Francesa?"
  ];

  return (
    <div className="admin-container">

      {/* HEADER */}
      <header className="admin-header">
        <h1>Online study group</h1>

        <input
          className="admin-search"
          type="text"
          placeholder="Pesquisar..."
        />

        <div className="admin-user">👤</div>
      </header>

      {/* CONTEÚDO */}
      <main className="admin-content">
        <div className="remover-card">

          <h2 className="remover-title">Remover Perguntas</h2>

          <select className="remover-select">
            <option>Escolha a matéria</option>
          </select>

          <select className="remover-select">
            <option>Escolha a submatéria</option>
          </select>

          <p className="remover-subtitle">
            selecione a pergunta que deseja excluir
          </p>

          <div className="remover-list">
            {perguntas.map((p, i) => (
              <button
                key={i}
                className={`pergunta-item ${
                  perguntaSelecionada === i ? "active" : ""
                }`}
                onClick={() => setPerguntaSelecionada(i)}
              >
                {p}
              </button>
            ))}
          </div>

          <button className="remover-btn">Confirmar</button>
        </div>
      </main>
    </div>
  );
};
