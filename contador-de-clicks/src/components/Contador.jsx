// Importamos React para poder usar JSX
import React from 'react';

// Importamos los estilos específicos del contador
import '../stylesheets/Contador.css'

// Definimos el componente 'Contador'
// Recibe una prop: numClics
function Contador({ numClics }) {
  return (
    // Muestra el número de clics dentro de un div con clase 'contador'
    <div className='contador'>
      {numClics}
    </div>
  );
}

// Exportamos el componente
export default Contador;
