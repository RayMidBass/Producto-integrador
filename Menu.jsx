// src/components/Menu.jsx
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link to="/actividades" className="hover:underline">Actividades del Curso</Link>
        </li>
        <li>
          <Link to="/sistema" className="hover:underline">Sistema Implementado</Link>
        </li>
        <li>
          <Link to="/codigo" className="hover:underline">Código Fuente</Link>
        </li>
        <li>
          <Link to="/reporte" className="hover:underline">Reporte de Modificaciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
