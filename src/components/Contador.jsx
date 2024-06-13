import React, { useState } from "react";

export function Contador() {
  let [suma, actualizarSuma] = useState(0);

  function aumentarElContador() {
    actualizarSuma(suma + 1);
  }

  return (
    <div>
      <p>{suma}</p>
      <button onClick={aumentarElContador}>Dale clic y a sumar</button>
    </div>
  );
}
