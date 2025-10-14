// Importamos React y el hook useState desde la librería React
import React, { useState } from 'react';

// Definimos el componente funcional llamado "Filtro"
function Filtro() {

  // Declaramos una variable de estado llamada "nombre" y su función para actualizarla "setNombre"
  // Por defecto, el estado empieza vacío ('')
  const [nombre, setNombre] = useState('');

  // Creamos una lista fija de nombres para filtrar
  const nombresLista = ['Luis', 'Mario', 'Carla', 'Andres', 'Camila'];

  // Usamos el método .filter() para crear un nuevo array que solo contenga los nombres
  // que incluyan dentro su texto lo que el usuario escribe (almacenado en "nombre")
  //Poner persona o nombreLista hace que el código sea más claro y evite conflictos.
  const filtroUser = nombresLista.filter((persona) => persona.includes(nombre));

  // Función que escucha el evento "onChange" del input
  // Cada vez que el usuario escribe, el valor se guarda en el estado "nombre"
  const escucharNombre = (e) => {
    setNombre(e.target.value);
  }

  // Lo que el componente muestra en pantalla (su "render")
  return (
    <div>
      {/* Campo de texto donde el usuario escribe el nombre a buscar */}
      <input 
        type="text" 
        placeholder='Escribe un nombre' 
        onChange={escucharNombre} 
      />

      {/* Mostramos lo que el usuario ha escrito */}
      <p>Ingresaste el nombre: {nombre}</p>

      {/* Título antes de la lista filtrada */}
      <p>Tu nombre coincide con:</p>

      {/* Lista desordenada con los nombres que coinciden */}
      <ul>
        {/* Recorremos el array filtrado con .map() y creamos un <li> por cada nombre */}
        {filtroUser.map((persona, i) => (
          <li key={i}>{persona}</li> // Cada <li> necesita una "key" única
        ))}
      </ul>
    </div>
  );
}

// Exportamos el componente para usarlo en otros archivos
export default Filtro;
