import './App.css'
import Logo from '../public/img/google-logo.png'
import ListaDeTareas from './components/ListaDeTarea'

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='google-logo-contenedor'>
        <img className='google-logo' src={Logo} alt='Google Logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
