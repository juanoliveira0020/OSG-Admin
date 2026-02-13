import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { adicionar_mat } from "./assets/Components/Adicionar_mat";
import { AdicionarMateria } from "./assets/Components/Adicionar_Materia";
import { AdicionarAdmin } from "./assets/Components/Adicionar_novo_amd";
import { AdicionarPergunta } from "./assets/Components/Adicionar_perguntas";
import { BanirUsuario } from "./assets/Components/Ban";
import { Denuncias } from "./assets/Components/Denuncias";
import { EditarPerguntas } from "./assets/Components/Editar_perguntas";
import { RemoverMaterias } from "./assets/Components/excluir_materias";
import { RemoverPerguntas } from "./assets/Components/Excluir_perguntas";
import { GerenciarMateriais } from "./assets/Components/Gerenciar_Materias";
import { GerenciarPerguntas } from "./assets/Components/Gerenciar_Perguntas";
import { Home } from "./assets/Components/Home";
import { login } from "./assets/Components/Tela_Login";
import { VisualizarMensagens } from "./assets/Components/Visualizar_conversas";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<login />} />

        {/* Matérias */}
        <Route path="/adicionar-materia" element={<AdicionarMateria />} />
        <Route path="/adicionar-mat" element={<adicionar_mat />} />
        <Route path="/remover-materias" element={<RemoverMaterias />} />
        <Route path="/gerenciar-materiais" element={<GerenciarMateriais />} />

        {/* Perguntas */}
        <Route path="/adicionar-pergunta" element={<AdicionarPergunta />} />
        <Route path="/editar-perguntas" element={<EditarPerguntas />} />
        <Route path="/remover-perguntas" element={<RemoverPerguntas />} />
        <Route path="/gerenciar-perguntas" element={<GerenciarPerguntas />} />

        {/* Administração */}
        <Route path="/adicionar-admin" element={<AdicionarAdmin />} />
        <Route path="/banir-usuario" element={<BanirUsuario />} />
        <Route path="/denuncias" element={<Denuncias />} />

        {/* Mensagens */}
        <Route path="/visualizar-mensagens" element={<VisualizarMensagens />} />

      </Routes>
    </Router>
  );
}

export default App;
