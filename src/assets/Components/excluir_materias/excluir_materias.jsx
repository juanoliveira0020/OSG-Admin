import React, { useState } from "react";
import "./remover_materias.css";

export const RemoverMaterias = () => {
  const [materiaSelecionada, setMateriaSelecionada] = useState(null);

  const materias = [
    { nome: "Matemática", icon: "🧠" },
    { nome: "Química", icon: "⚛️" },
    { nome: "Astronomia", icon: "🛰️" },
    { nome: "Informática", icon: "🖥️" }
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

          <h2 className="remover-title">Remover Matérias</h2>

          <select className="remover-select">
            <option>Escolha a matéria</option>
          </select>

          <select className="remover-select">
            <option>Escolha a submatéria</option>
          </select>

          <p className="remover-subtitle">
            selecione a matéria que deseja excluir
          </p>

          <div className="remover-list">
            {materias.map((m, i) => (
              <button
                key={i}
                className={`materia-item ${
                  materiaSelecionada === i ? "active" : ""
                }`}
                onClick={() => setMateriaSelecionada(i)}
              >
                <span>{m.nome}</span>
                <span className="materia-icon">{m.icon}</span>
              </button>
            ))}
          </div>

          <button className="remover-btn">Confirmar</button>
        </div>
      </main>
    </div>
  );
};
