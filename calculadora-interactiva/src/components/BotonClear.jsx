import React from "react";
import '../stylesheets/BotonClear.css'

// Componente funcional "BotonClear"
const BotonClear = (props) => (
  // El botón ejecuta la función manejarClear cuando se hace clic
  <div className='boton-clear' onClick={props.manejarClear}>
    {/* Muestra el texto entre las etiquetas (props.children) */}
    {props.children}
  </div>
);

export default BotonClear;
