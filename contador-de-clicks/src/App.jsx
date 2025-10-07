// Importamos los estilos globales
import './App.css'

// Importamos una imagen (el logo)
import Logo from '../public/img/logo.png'

// Importamos los componentes hijos
import Boton from '../src/components/Boton'
import Contador from './components/Contador'

// Importamos el hook useState desde React
import { useState } from 'react'

function App() {

  // useState crea una "variable reactiva" llamada numClics
  // setNumClics es la función para actualizar su valor
  // (0) es el valor inicial
  const [numClics, setNumClics] = useState(0);

  // Función que se ejecuta al hacer clic en el botón "Clic"
  const manejarClic = () => {
    setNumClics(numClics + 1); // Incrementa el contador en 1
  }

  // Función que se ejecuta al hacer clic en "Reiniciar"
  const reiniciarContador = () => {
    setNumClics(0); // Reinicia el contador a cero
  }

  // JSX que define la estructura visual de la app
  return (
    <div className='App'>
      
      {/* Contenedor del logo */}
      <div className='netflix-logo-contenedor'>
        <img className='netflix-logo' src={Logo} alt='Logo' />
      </div>

      {/* Contenedor principal con contador y botones */}
      <div className='contenedor-principal'>
        
        {/* Mostramos el número de clics */}
        <Contador numClics={numClics} />
        
        {/* Botón de clic */}
        <Boton 
          texto='Clic'
          esBotonDeClick={true}
          manejarClic={manejarClic}
        />
        
        {/* Botón de reinicio */}
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  )
}

// Exportamos el componente principal para que main.jsx lo renderice
export default App
