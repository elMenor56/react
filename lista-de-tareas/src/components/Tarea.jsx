// Importaciones
import React from "react"; // React (necesario para JSX)
import '../stylesheets/Tarea.css' // Estilos del componente tarea
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Icono para el botón eliminar

// Componente que representa una sola tarea
// Recibimos las props mediante desestructuración: id, texto, completada, completarTarea, eliminarTarea
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    // Div contenedor de la tarea con clase condicional:
    // si completada === true se añade la clase 'completada' para estilos
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      
      {/* DIV con el texto de la tarea */}
      {/* onClick llama a completarTarea pasando el id para alternar el estado */}
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}
      >
        {texto} {/* Muestra el texto de la tarea */}
      </div>

      {/* DIV para el icono/botón de eliminar */}
      {/* onClick llama a eliminarTarea pasando el id */}
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}
      >
        {/* Icono SVG renderizado por react-icons */}
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

// Exportamos el componente
export default Tarea;
