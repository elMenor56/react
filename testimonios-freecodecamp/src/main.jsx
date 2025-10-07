// Importamos StrictMode desde React
// StrictMode es una herramienta de desarrollo que ayuda a detectar errores potenciales.
// No afecta el funcionamiento en producción (solo da avisos en consola durante el desarrollo).
import { StrictMode } from 'react'

// Importamos createRoot desde el paquete react-dom/client
// Este método se usa para "conectar" React con el HTML real del navegador.
import { createRoot } from 'react-dom/client'

// Importamos el archivo de estilos principal (CSS global)
// Aquí se suelen incluir estilos generales o importaciones de frameworks de CSS (como Tailwind).
import './index.css'

// Importamos el componente raíz de la aplicación (App)
// Este será el primer componente que React renderiza.
import App from './App.jsx'

// Buscamos en el HTML el elemento con el id "root"
// (normalmente está definido en el archivo index.html del proyecto)
const rootElement = document.getElementById('root')

// Creamos un "root" de React vinculado al elemento HTML encontrado
const root = createRoot(rootElement)

// Renderizamos la aplicación dentro del "root"
// Todo el árbol de componentes comienza con <App />
root.render(
  // StrictMode envuelve la app para detectar problemas de desarrollo
  <StrictMode>
    <App /> {/* Componente principal de la aplicación */}
  </StrictMode>,
)
