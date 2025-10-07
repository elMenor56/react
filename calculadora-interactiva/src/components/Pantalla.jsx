import React from "react";
import '../stylesheets/Pantalla.css'

// Componente que muestra el valor actual en pantalla
const Pantalla = ({ input }) => (
  <div className='input'>
    {/* Muestra el valor del estado "input" que recibe como prop */}
    {input}
  </div>
);

export default Pantalla;
