// Importamos React (necesario para JSX)
import React from 'react';

// Importamos el archivo CSS con los estilos del botón
import '../stylesheets/Boton.css';

// Definimos el componente funcional 'Boton'
// Usamos "desestructuración" en los parámetros ({ texto, esBotonDeClick, manejarClic })
// Esto significa que estamos extrayendo directamente esas tres props del objeto props.
function Boton({ texto, esBotonDeClick, manejarClic }) {
  return (
    // Botón con clase dinámica
    // Si esBotonDeClick es true, se usa la clase 'boton-clic'
    // Si es false, se usa 'boton-reiniciar'
    <button 
      className={ esBotonDeClick ? 'boton-clic' : 'boton-reiniciar' }
      onClick={manejarClic}  // Asigna la función que se ejecutará al hacer clic
    >
      {texto} {/* Muestra el texto recibido por props */}
    </button>
  );
}

// Exportamos el componente para usarlo en App.jsx
export default Boton;
