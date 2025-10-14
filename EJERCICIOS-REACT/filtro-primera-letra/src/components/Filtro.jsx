import React, { useState } from 'react'

function Filtro() {

  const [nombre, setNombre] = useState('');

  const escucharNombre = (e) => {
    setNombre(e.target.value);
  }

  const listaNombres = ['Manuel', 'Carlos', 'Carol', 'Pepe', 'Patrick', 'Sandra']

  // Crea un nuevo arreglo con los nombres que comienzan con las letras escritas por el usuario (sin importar mayúsculas o minúsculas)
  // personas evalúa cada nombre, filter devuelve solo los que cumplen la condición
  const filtroNombres = listaNombres.filter((personas) => personas.toLowerCase().startsWith(nombre.toLowerCase()))
  //filtroNombres contiene solo los elementos que coinciden con la búsqueda.


  return (
    <div>
      <input type="text" placeholder='Escribe la letra del nombre que quieres buscar' onChange={escucharNombre} />
      <p>Letra ingresada: {nombre}</p>
      <p>El nombre que buscas es: </p>

      {/*Recorre el arreglo filtrado y muestra cada nombre que coincida con la búsqueda en un <p> individual*/}
      {/*personas → representa cada elemento individual (por ejemplo, 'Luis', 'Lucía').*/}
      {/*i → es el índice (posición del elemento en el arreglo, como 0, 1, 2...).*/}
      {filtroNombres.map((personas, i) => (<p key={i}>{personas}</p>))}
    </div>
  )
}

export default Filtro