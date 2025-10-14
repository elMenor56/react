import React, { useState } from 'react'  
// Importamos React y el hook useState para manejar estados dentro del componente.

function Detalles() {  
  // Definimos el componente funcional "Detalles".

  const [nombre, setNombre] = useState('')  
  // Estado "nombre" para guardar lo que el usuario escribe en el input.

  const [info, setInfo] = useState({})  
  // Estado "info" para guardar los datos completos del usuario encontrado.

  const listaUsuarios = [  
    // Arreglo con varios objetos, cada uno representa un usuario.
    { nombre: 'Manuel', edad: 20, ciudad: 'Palmira' },
    { nombre: 'Lili', edad: 30, ciudad: 'Cali' },
    { nombre: 'Sofia', edad: 16, ciudad: 'Barranquilla' },
    { nombre: 'Lisa', edad: 32, ciudad: 'Bogotá' },
    { nombre: 'Eduardo', edad: 28, ciudad: 'Pereira' }
  ]

  const filtroUsuarios = listaUsuarios.filter((persona) =>  
    // Filtra los nombres que contengan lo escrito por el usuario (no importa mayúscula/minúscula)
    persona.nombre.toLowerCase().includes(nombre.toLowerCase())
  )

  const escucharUsuario = (e) => {  
    // Función que se ejecuta cada vez que el usuario escribe en el input.
    setNombre(e.target.value)  
    // Actualiza el estado "nombre" con lo que el usuario escribe.
  }

  const mostrarInfo = () => {  
    // Función que busca el usuario cuando se hace clic en el botón.
    const detalleUsuarios = listaUsuarios.find((usuario) =>  
      usuario.nombre.toLowerCase() === nombre.toLowerCase()  
      // Busca una coincidencia exacta entre el nombre escrito y los de la lista.
    )

    // Si encuentra un usuario, actualiza el estado "info" con sus datos.
    if (detalleUsuarios) {
      setInfo(detalleUsuarios)
    } else {
      setInfo({}) // Si no hay coincidencia, deja el estado vacío.
    }
  }

  return (
    <div>
      {/* Input controlado: lo que escribes se guarda en el estado "nombre" */}
      <input
        type="text"
        placeholder='Escriba un nombre'
        onChange={escucharUsuario}
      />

      {/* Muestra lo que el usuario está escribiendo */}
      <p>Buscaste a: {nombre}</p>

      {/* Muestra los nombres que coinciden parcialmente con lo escrito */}
      {filtroUsuarios.map((persona, i) => (
        <p key={i}>{persona.nombre}</p>
      ))}

      {/* Botón que ejecuta la función mostrarInfo */}
      <button onClick={mostrarInfo}>Buscar</button>

      {/* Si se encontró un usuario, muestra su información completa */}
      {info.nombre ? (
        <div>
          <h3>Información del usuario:</h3>
          <p>Nombre: {info.nombre}</p>
          <p>Edad: {info.edad}</p>
          <p>Ciudad: {info.ciudad}</p>
        </div>
      ) : (
        // Si no se encontró, muestra este mensaje.
        <p>No se ha encontrado ningún usuario</p>
      )}
    </div>
  )
}

export default Detalles  
// Exportamos el componente para usarlo en otro archivo.
