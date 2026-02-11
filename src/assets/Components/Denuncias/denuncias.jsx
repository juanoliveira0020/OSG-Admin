import React from "react";
import { useNavigate } from "react-router-dom";
import "./denuncias.css";

import user1 from "../../assets/image/user1.png";
import user2 from "../../assets/image/user2.png";
import user3 from "../../assets/image/user3.png";

export const Denuncias = () => {
  const navigate = useNavigate();

  const denuncias = [
    {
      nome: "Juninho do desce e quebra",
      id: "40028922",
      motivo: "Denuncia de envio de imagem impropria",
      foto: user1,
    },
    {
      nome: "Makauli",
      id: "40028924",
      motivo: "Denuncia de injuria racial.",
      foto: user2,
    },
    {
      nome: "Dridelz",
      id: "40028927",
      motivo: "Denuncia de xenofobia",
      foto: user3,
    },
  ];

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
      <main className="admin-content denuncias-page">

        <div className="denuncias-card">

          <h2 className="denuncias-title">Denuncias</h2>

          {denuncias.map((d, i) => (
            <div key={i} className="denuncia-item">

              <div className="denuncia-top">
                <div>
                  <p>nome: {d.nome}</p>
                  <p>id: {d.id}</p>
                </div>

                <img src={d.foto} alt="usuario" />
              </div>

              <div className="denuncia-motivo">
                {d.motivo}
              </div>

            </div>
          ))}

          <button className="denuncia-btn">
            Confirmar
          </button>

        </div>

      </main>

    </div>
  );
};
