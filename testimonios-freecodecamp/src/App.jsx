// Importamos el archivo de estilos globales de la app
import './App.css'

// Importamos el componente Testimonio (creado antes)
// Ojo: la ruta debe coincidir con el nombre real del archivo
import Testimonio from './components/testimonios'

// Definimos el componente principal 'App'
function App() {
  return (
    // Contenedor principal de toda la aplicación
    <div className='App'>

      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>

        {/* Llamamos al componente Testimonio y le pasamos props personalizadas */}
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando cientos de horas de lecciones gratuitas en freeCodeCamp. Al cabo de un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />

        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniero de software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel totalmente principiante a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble.'
        />

        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Siempre me ha costado aprender JavaScript. He tomado muchos cursos pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify.'
        />
      </div>
    </div>
  )
}

// Exportamos App para que se renderice en main.jsx
export default App
