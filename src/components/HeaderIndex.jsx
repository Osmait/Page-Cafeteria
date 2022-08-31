import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export const HeaderIndex = () => {
  return (
    <header className="header header-inicio">
    <div className="contenido-header contenedor">
      <div className="barra">
        <div className="logo">
          <img src={logo} alt="logo cafeteria" />
        </div>

        <nav className="nav-principal">
          <NavLink to="/" className={({isActive})=> isActive ? "activo":''} > Inicio</NavLink>
          <NavLink to="/nosotros" className={({isActive})=> isActive ? "activo":''}>Nosotros</NavLink>
          <NavLink to="/proceso"className={({isActive})=> isActive ? "activo":''}>Proceso</NavLink>
          <NavLink to="/menu"className={({isActive})=> isActive ? "activo":''}>Menú</NavLink>
          <NavLink to="/galeria"className={({isActive})=> isActive ? "activo":''}>Galería</NavLink>
          <NavLink to="/contacto"className={({isActive})=> isActive ? "activo":''}>Contacto</NavLink>
        </nav>
      </div>
      <div className="texto-header">
        <h1>Disfruta una deliciosa taza de café</h1>
      </div>
    </div>
  </header>
  )
}
