import React from 'react';

/*
  Contador: componente presentacional que muestra un título y un valor.
  Props:
    - titulo: texto que describe el contador (ej: "Clics" o "Puntos")
    - valor: número que queremos mostrar
*/
function Contador({ titulo, valor }) {
  return (
    <div className="contador">
      <div className="contador-titulo">{titulo}</div>
      <div className="contador-valor">{valor}</div>
    </div>
  );
}

export default Contador;
