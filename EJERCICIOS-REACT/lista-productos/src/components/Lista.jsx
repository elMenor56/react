import React, { useState } from 'react'

function Lista() {

  const [precios, setPrecio] = useState(false)

  const listaProductos = [
    { nombre: 'Zapato', precio: 80 },
    { nombre: 'Camisa', precio: 50 },
    { nombre: 'Pantalón', precio: 90 },
    { nombre: 'Gorra', precio: 30 },
    { nombre: 'Chaqueta', precio: 120 }
  ];

  const filtroProductos = listaProductos.filter((producto) => producto.precio > 50)

  const manejarClic = () => {
    setPrecio(!precios)
    console.log(precios)
  }

  return (
    <div>
      <p>Productos disponibles:</p>

      {precios ? filtroProductos.map((producto, i) => (<p key={i}>{producto.nombre} - ${producto.precio}</p>)) : listaProductos.map((producto, i) => (<p key={i}>{producto.nombre} - ${producto.precio}</p>))}
      
      <button onClick={manejarClic}>{precios ? 'Ver todos los precios' : 'Filtrar los mas caros'}</button>
    </div>
  )
}

export default Lista