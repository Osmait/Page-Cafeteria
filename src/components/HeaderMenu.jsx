import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";

export const HeaderMenu = () => {
  return (
    <header className="header header-menu">
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
        <h1>Disfruta nuestro delicioso menú</h1>
      </div>
    </div>
  </header>
  )
}
