import React from "react";

function Usuario({ nombre, activo }) {
  return (
    <div className="usuario-info">
      <h2>{activo === true ? `Bienvenido ${nombre}`: 'Usuario Inactivo'}</h2>
    </div>
  );
}

export default Usuario;