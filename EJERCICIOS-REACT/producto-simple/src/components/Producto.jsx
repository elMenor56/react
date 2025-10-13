import React from "react";

function Producto({ nombre, precio, stock }) {
    return (
        <div>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <p>{stock > 0 ? 'Disponible' : 'Agotado'}</p>
        </div>
    );
}

export default Producto;