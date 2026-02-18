import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Adicionar_sub } from "./assets/Components/Adicionar_sub/Adicionar_sub";
import { Adicionar_materia } from "./assets/Components/Adicionar_Materia/adicionar_materia";
import { AdicionarAdmin } from "./assets/Components/Adicionar_novo_amd/adicionar_adm";
import { AdicionarPergunta } from "./assets/Components/Adicionar_perguntas/adicionar_perguntas";
import { BanirUsuario } from "./assets/Components/Ban/ban";
import { Denuncias } from "./assets/Components/Denuncias/denuncias";
import { EditarPerguntas } from "./assets/Components/Editar_perguntas/editar_perguntas";
import { RemoverMaterias } from "./assets/Components/excluir_materias/excluir_materias";
import { RemoverPerguntas } from "./assets/Components/Excluir_perguntas/excluir_perguntas";
import { GerenciarMateriais } from "./assets/Components/Gerenciar_Materias/gerenciar_materias";
import { GerenciarPerguntas } from "./assets/Components/Gerenciar_Perguntas/gerenciar_Perguntas";
import { Home } from "./assets/Components/Home/Home";
import { Tela_login } from "./assets/Components/Tela_Login/login";
import { VisualizarMensagens } from "./assets/Components/Visualizar_conversas/visualizar_conversas";

function App() {
  return (
   <Router>
  <Routes>
    <Route path="/Home" element={<Home />} />
  </Routes>
</Router>


  );
}

export default App;
