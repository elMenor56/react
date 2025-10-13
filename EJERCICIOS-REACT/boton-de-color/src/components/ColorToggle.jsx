import React, { useState } from "react";

function ColorToggle() {

  // 🔹 1. Definimos una lista (arreglo) de colores disponibles
  const colores = ["red", "blue", "green", "yellow"];

  // 🔹 2. Creamos un estado para guardar el índice actual del color
  // Por defecto inicia en 0 (primer color del arreglo)
  const [indiceColor, setIndiceColor] = useState(0);

  // 🔹 3. Función que se ejecuta cada vez que se hace clic en el botón
  const cambiarColor = () => {
    // Actualizamos el índice sumando 1, pero usamos el operador % (módulo)
    // para que vuelva a 0 cuando llegue al final del arreglo
    setIndiceColor((indiceColor + 1) % colores.length);
  };

  // 🔹 4. Guardamos el color actual basándonos en el índice
  const colorActual = colores[indiceColor];

  return (
    <div
      // 🔹 5. Aplicamos el color como fondo al contenedor
      style={{
        backgroundColor: colorActual,
        padding: "50px",
        borderRadius: "10px",
        color: "#fff",
        textAlign: "center",
        transition: "background-color 0.5s ease"
      }}
    >
      <h2>Color actual: {colorActual}</h2>
      {/* 🔹 6. Cada clic cambia el color del fondo */}
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
}

export default ColorToggle;
