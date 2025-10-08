import React from "react";

/*
  Boton: componente reutilizable que representa UN botón.
  Props:
    - texto: string que se muestra dentro del botón
    - tipo: string para decidir la clase/estilo (ej: 'click', 'points', 'reset')
    - manejarClic: función que se ejecuta al hacer clic (onClick)
*/
function Boton({ texto, tipo = 'default', manejarClic }) {
  // Generamos una clase CSS basada en el tipo (flexible y escalable)
  const className = `boton boton-${tipo}`.trim();

  return (
    // Siempre devolvemos un único <button> por este componente
    // type="button" evita que el botón haga submit si está dentro de un <form>
    <button type="button" className={className} onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;
