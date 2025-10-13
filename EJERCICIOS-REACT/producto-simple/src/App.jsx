import './App.css'
import Producto from './components/Producto'

function App() {
  return (
    <div className='contenedor-principal'>
      <h2>Productos</h2>
      <Producto 
      nombre='Camisa' /* '' Es para texto */
      precio={5000}   /* {} Es para numeros */
      stock={30} />

      <Producto 
      nombre='Pantalon'
      precio={7000}
      stock={15} />

      <Producto 
      nombre='Gorra'
      precio={2000}
      stock={0} />
    </div>
  )
}

export default App
