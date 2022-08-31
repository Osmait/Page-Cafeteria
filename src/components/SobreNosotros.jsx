import React from "react";
import icono_Cafe from "../assets/icono_cafe.svg";
import icono_te from "../assets/icono_te.svg";
import icono_postre from "../assets/icono_postre.svg";
import { Galeria } from '../components/Galeria'




export const SobreNosotros = () => {
  return (
    <main className="contenedor contenido-principal text-center">
      <section className="conoces">
        <h2>
          <span>Conoce más</span> sobre nosotros
        </h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          pariatur omnis debitis facere fuga sapiente? Minima quas inventore,
          iste dolor, veritatis consequatur, pariatur similique neque eaque
          iusto qui necessitatibus ipsam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi eum accusamus nam sint saepe, sed officiis
          harum, est corporis ullam porro rem atque sunt at eaque doloribus ea
          possimus facilis!
        </p>
      </section>
      <section className="iconos">
        <ul className="listado-iconos">
            <li>
                <img src={icono_Cafe} alt="icono café" />
                <p>Café</p>
            </li>
            <li>
                <img src={icono_postre} alt="icono_postre" />
                <p>Postre</p>
            </li>
            <li>
                <img src={icono_te} alt="icono_te" />
                <p>Té</p>
            </li>
            
            
        </ul>
      </section>

      <Galeria/>
    </main>
  );
};
