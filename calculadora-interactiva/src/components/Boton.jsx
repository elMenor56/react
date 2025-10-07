// Importamos React para poder usar JSX y componentes
import React from "react";
// Importamos los estilos del botón
import '../stylesheets/Boton.css'

// Declaramos el componente de función llamado "Boton"
function Boton(props) {

  // Función interna que verifica si el valor recibido es un operador
  const esOperador = valor => {
    // Retorna true si el valor NO es un número, y no es '.' ni '='
    return isNaN(valor) && (valor !='.') && (valor !='=');
  };

  return (
    // Creamos un div con clases dinámicas:
    // Si "esOperador" es true, agrega la clase "operador"
    // Si es false, deja solo "boton-contenedor"
    // trimEnd() elimina espacios sobrantes al final
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
      // Cuando se hace clic, ejecuta la función manejarClic que viene desde el padre (App.jsx)
      onClick={() => props.manejarClic(props.children)}
    >
      {/* props.children es el contenido dentro de <Boton> */}
      {props.children}
    </div>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Boton;
