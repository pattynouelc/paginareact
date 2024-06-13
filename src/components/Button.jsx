import React from "react";

export function Button() {
  function responderAlEventoClick() {
    alert("El usuario hizo clic");
  }

  function pasoPorArriba() {
    console.log("El usuario paso por arriba del boton");
  }

  return (
    <button onClick={responderAlEventoClick} onMouseOver={pasoPorArriba}>
      Click me!
    </button>
  );
}
