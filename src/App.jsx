import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BanirUsuario } from "./assets/Components/Ban/ban";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BanirUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
