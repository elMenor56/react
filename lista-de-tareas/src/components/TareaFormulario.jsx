// Importaciones
import React, { useState } from "react"; // React y useState para controlar el input
import '../stylesheets/TareaFormulario.css' // Estilos del formulario
import { v4 as uuidv4 } from 'uuid'; // Generador de IDs únicos para cada tarea

// Componente formulario para crear nuevas tareas
function TareaFormulario(props) {

  // Estado local para controlar el valor del input
  const [input, setInput] = useState('');

  // Función que se ejecuta al cambiar el contenido del input
  const manejarCambio = e => {
    // e.target.value contiene el texto que escribe el usuario
    setInput(e.target.value);
  }

  // Función que se ejecuta cuando el formulario se envía (submit)
  const manejarEnvio = e => {
    // Evitamos que el formulario haga un submit tradicional (recargar la página)
    e.preventDefault();

    // Creamos el objeto tarea nueva con un id único, el texto y completada=false por defecto
    const tareaNueva = {
      id: uuidv4(), // id único
      texto: input, // texto tomado del estado local
      completada: false // inicia como no completada
    }

    // Llamamos a la función que viene del padre (props.onSubmit) y le pasamos la tarea nueva
    // Esto "sube" la tarea hacia el componente padre para que la agregue al arreglo
    props.onSubmit(tareaNueva);
    
    // (Opcional) podríamos limpiar el input después de enviar:
    // setInput('');
  }

  // Render del formulario
	return (
		<form className='tarea-formulario' onSubmit={manejarEnvio}>
			{/* Campo de texto */}
			{/* onChange actualiza el estado input en cada tecla */}
			<input 
				className='tarea-input'     // clase CSS
				type='text'                 // tipo de input
				placeholder='Escribe una tarea' // texto guía
				name='texto'                // nombre del campo
        onChange={manejarCambio}      // evento que actualiza el estado local
        /* NOTA: en una versión controlada del input podríamos agregar value={input}
           para ligar el valor mostrado con el estado. */
			/>
			{/* Botón para enviar el formulario */}
			<button className='tarea-boton'>
				Agregar Tarea
			</button>
		</form>
	);
}

// Exportamos el componente formulario
export default TareaFormulario;
