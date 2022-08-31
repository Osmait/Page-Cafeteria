import React, { useState } from "react";

export const Formulario = () => {

    const [nombre,setNombre]=useState('')
    const [email,setEmail]=useState('')
    const [personas,setPersonas]=useState('')
    const [hora,setHorA]=useState('')
    const [fecha,setFecha]=useState('')
    const[error, setError]=useState(false)

    const [reservaciones,setReservaciones]= useState({})


    const handleSubmit= (e)=> {
        e.preventDefault()


        if([nombre,email,personas,hora,fecha].includes('')){
            setError(true)
            
            return
        }

        const citas = {
            nombre,
            email,
            personas,
            hora,
            fecha

        }
       
       setReservaciones(citas)
        
        
// Reiniciando el Formulario
    setNombre('')
    setEmail('')
    setPersonas('')
    setHorA('')
    setFecha('')
    }
   



  return (
    <>
    <main className="contenedor contenido-principal">
      <h2>
        <span>Reserva tu</span>Mesa
      </h2>
      <div className="contenido-contacto">
    
        <form className="formulario" onSubmit={handleSubmit}>
       
          <div className="campo">
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id="nombre" placeholder="Tu Nombre"
            onChange={e => setNombre(e.target.value)}
            value={nombre}
            />
          </div>

          <div className="campo">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Tu Email" 
            onChange={e => setEmail(e.target.value)}
            value={email}
            />
          </div>

          <div className="campo">
            <label>Número de Personas: </label>
            <select
            onChange={e => setPersonas(e.target.value)}
            value={personas}
            >
              <option value='' disabled defaultChecked  >
                --Seleccione--
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="mas">+4</option>
            </select>
          </div>


          <div className="campo">
            <label htmlFor="hora">Hora: </label>
            <input type="time" id="hora" max={'18:00'}  min={'09:00'}
             onChange={e => setHorA(e.target.value)}
             value={hora}
             />
          </div>

          <div className="campo">
            <label htmlFor="fecha">Fecha: </label>
            <input type="date" id="fecha" 
             onChange={e => setFecha(e.target.value)}
             value={fecha}
             
             />
          </div>


          <div className="campo">
            <input type="submit" value={"Enviar"} />
          </div>
          {error && <p>Todos los campos son obligatorios</p> }
        </form>
      </div>
    </main>
             </>
  );
};
