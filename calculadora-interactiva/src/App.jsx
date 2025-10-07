// Importamos los estilos y componentes necesarios
import './App.css'
import Logo from '../public/img/disney-logo.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'

// Importamos el hook useState de React
import { useState } from 'react'

// Importamos la función evaluate de mathjs para realizar cálculos
import { evaluate } from 'mathjs'

function App() {

  // useState crea una variable de estado "input" y una función "setInput"
  // Inicialmente, el input está vacío
  const [input, setInput] = useState('');

  // Agrega valores al input cada vez que se hace clic en un botón numérico u operador
  const agregarInput = val => {
    setInput(input + val);
  };

  // Evalúa el resultado de la operación
  const calcularResultado = () => {
    if (input) {
      // evaluate interpreta el string como una expresión matemática (ej: "2+2")
      setInput(evaluate(input));
    } else {
      // Si no hay input, muestra una alerta
      alert("Por favor ingrese valores para realizar calculos.");
    }
  };

  // Renderizado principal del componente
  return (
    <div className='App'>
      <div className='nba-logo-contenedor'>
        <img className='nba-logo' src={Logo} alt='Logo de NBA' />
      </div>

      <div className='contenedor-calculadora'>
        {/* Muestra la pantalla con el valor actual */}
        <Pantalla input={input}/>

        {/* Cada fila contiene 4 botones */}
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          {/* El botón "=" ejecuta calcularResultado */}
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        {/* Botón que limpia toda la pantalla */}
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
