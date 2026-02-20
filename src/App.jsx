import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RemoverMaterias } from "./assets/Components/excluir_materias/excluir_materias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RemoverMaterias/>} />
      </Routes>
    </Router>
  );
}

export default App;
