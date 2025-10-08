// Importaciones necesarias
import React, { useState } from "react"; // React y el hook useState
import TareaFormulario from "./TareaFormulario"; // Componente que contiene el formulario para crear tareas
import '../stylesheets/ListaDeTareas.css' // Estilos específicos del componente
import Tarea from "./Tarea"; // Componente que renderiza una tarea individual

// Componente principal que administra la lista de tareas
function ListaDeTareas() {

  // Estado local: arreglo de tareas (inicia vacío)
  const [tareas, setTareas] = useState([]);

  // Función para agregar una tarea: recibe un objeto `tarea`
  const agregarTarea = tarea => {
    // Si el texto no es solo espacios
    if (tarea.texto.trim()) {
      // Eliminamos espacios al inicio/fin del texto (limpieza)
      tarea.texto = tarea.texto.trim();
      // Creamos un nuevo arreglo poniendo la tarea nueva al inicio
      const tareasActualizadas = [tarea, ...tareas];
      // Actualizamos el estado con el nuevo arreglo -> provoca re-render
      setTareas(tareasActualizadas);
    }
    // Si el texto está vacío o solo espacios, no agrega nada
  }

  // Función para eliminar una tarea por id
  const eliminarTarea = id => {
    // Filtramos las tareas dejando solo las que no tengan el id recibido
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    // Actualizamos el estado con el arreglo filtrado
    setTareas(tareasActualizadas);
  }

  // Función para alternar la propiedad 'completada' de una tarea
  const completarTarea = id => {
    // Recorremos las tareas y devolvemos un nuevo arreglo con la tarea modificada
    const tareasActualizadas = tareas.map(tarea => {
      // Si la tarea actual es la que buscamos por id...
      if (tarea.id === id) {
        // Mutamos la propiedad completada (toggle true/false)
        tarea.completada = !tarea.completada;
      }
      // Devolvemos la tarea (modificada o no)
      return tarea;
    });
    // Actualizamos el estado con el arreglo resultante
    setTareas(tareasActualizadas);
  }

  // Render del componente
  return (
    <>
      {/* Componente formulario: le pasamos la función agregarTarea con la prop onSubmit */}
      <TareaFormulario onSubmit={agregarTarea} />

      {/* Contenedor donde se listan las tareas */}
      <div className='tareas-lista-contenedor'>
        {
          // Recorremos el arreglo de tareas y para cada una renderizamos <Tarea />
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id} // key necesaria para listar elementos en React
              id={tarea.id} // id de la tarea
              texto={tarea.texto} // texto a mostrar
              completada={tarea.completada} // estado completada (true/false)
              eliminarTarea={eliminarTarea} // función para eliminar (se pasa al hijo)
              completarTarea={completarTarea} // función para completar (se pasa al hijo)
            />
          )
        }
      </div>
    </>
  );
}

// Exportamos el componente para usarlo en App.jsx
export default ListaDeTareas;
