// Importamos React (necesario para usar JSX y crear componentes)
import React from 'react';

// Importamos los estilos CSS específicos para este componente
import '../stylesheets/Testimonio.css';

// Definimos el componente funcional 'Testimonio'
// Recibe 'props' como parámetro: un objeto con todos los datos enviados desde App.jsx
function Testimonio(props) {
  return (
    // Contenedor principal del testimonio
    <div className='contenedor-testimonio'>
      
      {/* Imagen del testimonio */}
      {/* El valor de src se genera dinámicamente con template literals: */}
      {/* Se concatena el nombre del archivo según el valor de props.imagen */}
      <img 
        className='imagen-testimonio'
        src={`../public/img/testimonio-${props.imagen}.jpeg`} 
        alt={`Foto de ${props.nombre}`} 
      />

      {/* Contenedor del texto del testimonio */}
      <div className='contenedor-texto-testimonio'>

        {/* Línea con el nombre y país */}
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>

        {/* Línea con el cargo y la empresa */}
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>

        {/* Texto del testimonio */}
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>

      </div>
    </div>
  );
}

// Exportamos el componente para que pueda ser usado en App.jsx
export default Testimonio;
