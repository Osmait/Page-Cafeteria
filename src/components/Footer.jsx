import React from "react";

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="contenedor contenido-footer bg-white">
        <div className="footer-box ubicacion ">
          <h3>Ubicación</h3>
          <p>Nicoleas Copérnico 5990</p>
          <p>Santiago de los Caballeros </p>
        </div>
        <div className="footer-box reservacion">
            <h3>Reservación</h3>
            <p>tel.330-293-3929</p>
            <a href="tel:330-293-3929">Llamar</a>
        </div>
        <div className="footer-box horario">
            <h3>Horario</h3>
            <p>Lun-Jue:11:00-22:00</p>
            <p>Vie-Sab: 09:00- 00:00</p>
            <p>Domingo:Cerrado</p>
        </div>
      </div>
      <p className="copyright">Todos los derechos reservados. La Cafetería</p>
    </footer>
  );
};
