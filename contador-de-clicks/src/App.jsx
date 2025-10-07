import './App.css'
import Logo from '../public/img/logo.png'
import Boton from '../src/components/Boton'
import Contador from './components/Contador'
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='netflix-logo-contenedor'>
        <img className='netflix-logo' src={Logo} alt='Logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClick={true} 
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  )
}

export default App
