import React, { useState } from 'react'

function Buscador() {

const [fruta, setFruta] = useState('');

const listaFrutas = ['Mora', 'Uva', 'Pera', 'Manzana', 'Fresa', 'Mango']

const filtroFrutas = listaFrutas.filter((frutas) => frutas.toLowerCase().includes(fruta.toLowerCase()))

const escucharFruta = (e) => {
  setFruta(e.target.value)
}

  return (
    <div>
      <input type="text" placeholder='Escribe el nombre de la fruta' onChange={escucharFruta} />
      <p>La fruta que estas buscando es: {fruta}</p>

      <ul>
        {filtroFrutas.length > 0 ? filtroFrutas.map((frutas, i) => (
        <li key={i}>{frutas}</li>
        )) : 'No hay coincidencias'}
      </ul>

    </div>
  );
}

export default Buscador;