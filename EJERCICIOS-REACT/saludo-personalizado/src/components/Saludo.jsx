import React, { useState } from "react";

function Saludo() {

  // Estado para almacenar lo que el usuario escribe
  const [nombre, setNombre] = useState('');

  // Estado para almacenar el saludo final
  const [saludo, setSaludo] = useState('');

  // 📘 Esta función actualiza el nombre cada vez que el usuario escribe
  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  };

  // 📗 Esta función se ejecuta al hacer clic en el botón
  const mostrarSaludo = () => {
    // Actualizamos el saludo usando el valor actual del nombre
    setSaludo(`Hola, ${nombre}`);
  };

  return (
    <div className="contenedor">
      <h2>Saludo personalizado</h2>

      {/* Captura el texto que escribe el usuario */}
      <input 
        type="text"
        placeholder="Escribe tu nombre"
        onChange={manejarCambio}
      />

      {/* Al hacer clic, muestra el saludo */}
      <button onClick={mostrarSaludo}>Saludar</button>

      {/* Muestra el saludo solo si existe */}
      <p>{saludo}</p>
    </div>
  );
}

export default Saludo;
