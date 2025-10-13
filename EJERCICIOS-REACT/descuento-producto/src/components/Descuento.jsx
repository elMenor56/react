import React from "react";

function Descuento({ nombre, precio, precioDescuento }) {

    // Calcular el total dentro del componente (no desde las props)
    let total = 0;

    // Si hay descuento, calcular el precio final
    if (precioDescuento > 0) {
        total = precio - precioDescuento
    };

    return (
        <div className="producto-info">
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Aplica descuento de: ${precioDescuento}</p>

            {/* Condicional: si hay descuento, muestra el nuevo precio */}
            <p>{precioDescuento ? `Precio total: ${total}` : 
            <>No se aplica descuento<br />Precio total: ${precio}</>} </p>
        </div>
    );


}

export default Descuento;