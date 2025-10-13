// Importamos React y el hook useState desde la librería react
import React, { useState } from "react";

function ToggleTexto() {
    // Estado: controla si se muestran o no los detalles
    // 'mostrar' es el valor actual
    // 'setMostrar' es la función que actualiza el valor
    const [mostrar, setMostrar] = useState(false);

    // Función que se ejecuta al hacer clic en el botón
    // Cambia el valor de 'mostrar' al opuesto (!mostrar)
    // Esto hace que el componente se vuelva a renderizar
    const manejarClic = () => {
        setMostrar(!mostrar);
    };

    return (
        <div className="contenedor">
            {/* Título del componente */}
            <h1>Hola</h1>

            {/* Botón que alterna el estado */}
            {/* Si 'mostrar' es true, muestra "Ocultar detalles"; si es false, muestra "Mostrar detalles" */}
            <button onClick={manejarClic}>
                {mostrar ? 'Ocultar detalles' : 'Mostrar detalles'}
            </button>

            {/* Párrafo que se muestra solo si 'mostrar' es true */}
            {/* El operador lógico && hace que el texto solo se renderice cuando la condición es verdadera */}
            <p>{mostrar && 'Hola soy un toggle'}</p>
        </div>
    );
}

// Exportamos el componente para poder usarlo en App.jsx
export default ToggleTexto;


//{mostrar ? ... : ...} → cambia el texto del botón dinámicamente.
//{mostrar && ...} → muestra el texto solo si mostrar es verdadero.