import React from "react";
import { useState } from "react";

function Sesion() {

    const [activo, setActivo] = useState("Iniciar Sesion");

    const [mensaje, setMensaje] = useState("Bienvenido Usuario");

    const cambiarEstado = () => {
        setActivo(
            //Si activo es igual a 'Iniciar sesión', entonces usa 'Cerrar sesión'; de lo contrario, usa 'Iniciar sesión'.
            activo === "Iniciar Sesion" ? "Cerrar Sesion" : "Iniciar Sesion"
        )
    }

    const cambiarMensaje = () => {
        setMensaje(
            mensaje === "Bienvenido Usuario" ? "Hasta Pronto" : "Bienvenido Usuario"
        )
    }

    //Hace que el botón ejecute una función que llame a ambas
        const manejarSesion = () => {
        cambiarEstado();
        cambiarMensaje();
    }

    return (
        <div className='contenedor-boton-estado'>
            <h2>{mensaje}</h2>
            <button onClick={manejarSesion}>{activo}</button>
        </div>
    );
}

export default Sesion;