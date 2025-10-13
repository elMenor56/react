import React, { useState } from "react";

function Boton() {

  const [clic1, setClic1] = useState(0);

  const [clic2, setClic2] = useState(0);

  const aumentarClic = () => {
    setClic1(clic1 + 1)
  }

  const aumentarEnCinco = () => {
    setClic2(clic2 + 5)
  }

  const reiniciarClic1 = () => {
    setClic1(0)
  }

  const reiniciarClic2 = () => {
    setClic2(0)
  }

  return(
    <div>
      <h2>{clic1}</h2>
      <button onClick={aumentarClic}>Click + 1</button>
      <button onClick={reiniciarClic1}>Reiniciar</button>
      <h2>{clic2}</h2>
      <button onClick={aumentarEnCinco}>Click + 5</button>
      <button onClick={reiniciarClic2}>Reiniciar</button>
    </div>
    );
}

export default Boton;