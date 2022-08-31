import nosotros_sidebar from '../assets/nosotros_sidebar.jpg'


export const NosotrosComp = () => {
  return (
    <main className="contenedor contenido-principal ">
      <h2><span>conoce más </span>Sobre Nosotros</h2>
      <div className="contenido-nosotros">
        <div className='imagen'>
          <img src={nosotros_sidebar} alt='nostros'/>
        </div>
        <div className='texto'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas labore quam odit enim fugiat consequatur saepe, porro iste tempore! Dolor est commodi saepe tenetur voluptatem labore impedit optio velit!</p>

          <blockquote>Excelente Sabor!</blockquote>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum iusto magnam provident soluta assumenda at incidunt expedita, saepe molestiae. Iure dolorem nobis a dicta officia exercitationem sint repellendus repellat.</p>

        </div>
      </div>
    </main>
  )
}
