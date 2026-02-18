import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adicionar_perguntas.css";

export const AdicionarPergunta = () => {
  const navigate = useNavigate();

  const [pergunta, setPergunta] = useState("");
  const [alternativas, setAlternativas] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const handleAlt = (letra, valor) => {
    setAlternativas({ ...alternativas, [letra]: valor });
  };

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
      <main className="admin-content add-pergunta-page">

        <h2 className="add-pergunta-title">Adicionar Perguntas</h2>

        {/* SELECTS */}
        <select className="select-box">
          <option>Escolha a materia</option>
        </select>

        <select className="select-box small">
          <option>Escolha a submateria</option>
        </select>

        {/* PERGUNTA */}
        <div className="pergunta-box">
          <label>Escreva a pergunta</label>

          <textarea
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
        </div>

        {/* ALTERNATIVAS */}
        <div className="alternativas">
          {["A", "B", "C", "D"].map((letra) => (
            <div key={letra} className="alt-item">
              <span>{letra}</span>
              <input
                value={alternativas[letra]}
                onChange={(e) => handleAlt(letra, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* BOTÃO */}
        <button className="confirm-btn">
          Confirmar
        </button>

      </main>

    </div>
  );
};
