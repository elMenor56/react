// Importaciones
import './App.css'                // estilos generales (opcional ahora)
import { useState } from 'react'  // hook useState para manejar estado local
import Boton from './components/Boton'      // componente Boton (una sola etiqueta <button>)
import Contador from './components/Contador'// componente Contador (muestra un valor)

function App() {
  // Estado para los clics (inicia en 0)
  const [numClics, setNumClics] = useState(0);

  // Estado para los puntos (inicia en 0)
  const [numPuntos, setNumPuntos] = useState(0);

  // Manejador para incrementar clics
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  // Reinicia el contador de clics a cero
  const reiniciarContador = () => {
    setNumClics(0);
  };

  // Manejador para incrementar puntos en 100
  const manejarPuntos = () => {
    setNumPuntos(numPuntos + 100);
  };

  // Reinicia el contador de puntos a cero
  const reiniciarContadorPuntos = () => {
    setNumPuntos(0);
  };

  // Render: usamos el componente Contador para mostrar valores y Boton para acciones.
  return (
    <div className='contenedor-principal'>

      {/* Sección de clics */}
      <h2>Contador de clics</h2>

      {/* Componente reutilizable que muestra un título y un valor */}
      <Contador valor={numClics} titulo="Clics" />

      {/* Cada Boton es una instancia independiente que recibe la función necesaria */}
      <Boton texto="Clic" tipo="click" manejarClic={manejarClic} />
      <Boton texto="Reiniciar" tipo="reset" manejarClic={reiniciarContador} />

      {/* Sección de puntos */}
      <h2>Contador de puntos</h2>

      {/* Reutilizamos el mismo Contador para los puntos */}
      <Contador valor={numPuntos} titulo="Puntos" />

      {/* Botones para puntos */}
      <Boton texto="Aumentar Puntos" tipo="points" manejarClic={manejarPuntos} />
      <Boton texto="Reiniciar Puntos" tipo="reset" manejarClic={reiniciarContadorPuntos} />

    </div>
  );
}

export default App;
