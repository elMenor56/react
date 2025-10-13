import './App.css'
import Descuento from './components/Descuento'

function App() {
  return (
    <div className='contenedor-principal'>
      <h2>Producto con descuento</h2>
      <Descuento
      nombre='Moto'
      precio={10000}
      precioDescuento={2000} />

      <h2>Producto sin descuento</h2>
      <Descuento
      nombre='Auto'
      precio={20000}
      precioDescuento={0} />
    </div>
  )
}

export default App
