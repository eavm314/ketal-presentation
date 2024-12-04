import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full h-[120px] bg-[#ff0141]">
      <div className="container mx-auto flex items-center h-full">
        <div className="flex w-1/5">
          <img
            className="w-[60px] h-[100px] object-cover mx-auto"
            alt="Imagen central"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3KBmfzzndsI_INVquJC7iA2Uvexf00_Y0Q&s"
          />
        </div>
        <ul className="flex space-x-10 w-full justify-between ">
          <li>
            <Link
              className={`${pathname === "/fase-inicio" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
              to="/fase-inicio"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/fase-planificacion" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
              to="/fase-planificacion"
            >
              Planificación
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/fase-diseno-desarrollo" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
              to="/fase-diseno-desarrollo"
            >
              Diseño y Desarrollo
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/fase-control-calidad-implementacion" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
              to="/fase-control-calidad-implementacion"
            >
              Control de Calidad
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/fase-cierre" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
              to="/fase-cierre"
            >
              Cierre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
