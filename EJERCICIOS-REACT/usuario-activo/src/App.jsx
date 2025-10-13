import './App.css'
import Usuario from './components/Usuario'

function App() {
  return (
    <div className='contenedor-principal'>
      <Usuario 
      nombre='pepe'
      activo={false}/>

      <Usuario 
      nombre='mario'
      activo={true}/>
    </div>
  )
}

export default App
