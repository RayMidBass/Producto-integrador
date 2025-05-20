// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Actividades from "./pages/Actividades";
import Sistema from "./pages/Sistema";
import CodigoFuente from "./pages/CodigoFuente";
import Reporte from "./pages/Reporte";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/sistema" element={<Sistema />} />
        <Route path="/codigo" element={<CodigoFuente />} />
        <Route path="/reporte" element={<Reporte />} />
        <Route path="*" element={<Actividades />} />
      </Routes>
    </Router>
  );
}

export default App;
