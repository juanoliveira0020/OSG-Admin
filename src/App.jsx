import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GerenciarMateriais } from "./assets/Components/Gerenciar_Materias/gerenciar_materias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GerenciarMateriais/>} />
      </Routes>
    </Router>
  );
}

export default App;
