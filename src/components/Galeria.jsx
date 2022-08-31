import React from 'react'
import galeria01 from "../assets/galeria/galeria_01.jpg";
import galeria02 from "../assets/galeria/galeria_02.jpg";
import galeria03 from "../assets/galeria/galeria_03.jpg";
import galeria04 from "../assets/galeria/galeria_04.jpg";
import galeria05 from "../assets/galeria/galeria_05.jpg";
import galeria06 from "../assets/galeria/galeria_06.jpg";
import galeria07 from "../assets/galeria/galeria_07.jpg";
import galeria08 from "../assets/galeria/galeria_08.jpg";
import galeria09 from "../assets/galeria/galeria_09.jpg";
import galeria10 from "../assets/galeria/galeria_10.jpg";



export const Galeria = () => {
  return (
    <section className='expreriencia'>
        <h2>
          <span>Vive la</span> Experiencia
        </h2>
        <div className='galeria'>
            <div className='imagen'>
                <img src={galeria01} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria02} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria03} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria04} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria05} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria06} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria07} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria08} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria09} alt='galeria'/>
            </div>
            <div className='imagen'>
                <img src={galeria10} alt='galeria'/>
            </div>
        </div>
    </section>
  )
}
