import React from "react";

export function Title(props) {
  return (
    <div>
      <h1>
        {props.nombre} {props.apellido}
      </h1>
    </div>
  );
}
