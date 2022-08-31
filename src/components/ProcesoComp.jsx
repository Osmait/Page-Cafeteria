import React from "react";
import proceso_1 from "../assets/proceso_1.jpg";
import proceso_2 from "../assets/proceso_2.jpg";
import proceso_3 from "../assets/proceso_3.jpg";
import proceso_4 from "../assets/proceso_4.jpg";
import proceso_5 from "../assets/proceso_5.jpg";

export const ProcesoComp = () => {
  return (
    <main className="contenedor contenido-principal ">
      <div className="proceso-cafe">
        <div className="imagen">
          <img src={proceso_1} alt="proceso" />
        </div>
        <div className="texto">
          <h3>Granos de café</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores vitae nihil consequuntur et quibusdam, vero, amet laborum
            animi explicabo officia accusamus cumque. Sapiente quaerat autem
            ipsa harum enim atque.
          </p>
        </div>
      </div>

      <div className="proceso-cafe">
        <div className="imagen">
          <img src={proceso_2} alt="proceso" />
        </div>
        <div className="texto">
          <h3>Tostar el café</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores vitae nihil consequuntur et quibusdam, vero, amet laborum
            animi explicabo officia accusamus cumque. Sapiente quaerat autem
            ipsa harum enim atque.
          </p>
        </div>
      </div>

      <div className="proceso-cafe">
        <div className="imagen">
          <img src={proceso_3} alt="proceso" />
        </div>
        <div className="texto">
          <h3>Empacar el café</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores vitae nihil consequuntur et quibusdam, vero, amet laborum
            animi explicabo officia accusamus cumque. Sapiente quaerat autem
            ipsa harum enim atque.
          </p>
        </div>
      </div>

      <div className="proceso-cafe">
        <div className="imagen">
          <img src={proceso_4} alt="proceso" />
        </div>
        <div className="texto">
          <h3> Moler granos de café</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores vitae nihil consequuntur et quibusdam, vero, amet laborum
            animi explicabo officia accusamus cumque. Sapiente quaerat autem
            ipsa harum enim atque.
          </p>
        </div>
      </div>
      
      <div className="proceso-cafe">
        <div className="imagen">
          <img src={proceso_5} alt="proceso" />
        </div>
        <div className="texto">
          <h3>Disfrutar una taza</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            maiores vitae nihil consequuntur et quibusdam, vero, amet laborum
            animi explicabo officia accusamus cumque. Sapiente quaerat autem
            ipsa harum enim atque.
          </p>
        </div>
      </div>
    </main>
  );
};
