import React from "react";

function NotaFinal({ nombre, nota, estado }) {

    //Si nota > 5 || nota < 0 → “Nota inválida”.
    //Si nota >= 3 → “Aprobado”.
    //Si no, → “Reprobado”.
    //Esto garantiza que primero se revisen los valores fuera del rango antes de pasar a las demás condiciones.
    if (nota > 5 || nota < 0) {
        estado = "Nota invalida"
    } else if (nota >= 3) {
        estado = "Aprobado"
    } else {
        estado = "Reprobado"
    }

    return (
        <div>
            <p>Hola {nombre}</p>
            <p>Tu nota es: {nota}</p>
            <p>Tu estado es: {estado}</p>
        </div>
    );
}

export default NotaFinal;