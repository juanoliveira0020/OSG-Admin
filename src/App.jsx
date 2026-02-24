import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VisualizarMensagens } from "./assets/Components/Visualizar_conversas/visualizar_conversas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisualizarMensagens/>} />
      </Routes>
    </Router>
  );
}

export default App;
