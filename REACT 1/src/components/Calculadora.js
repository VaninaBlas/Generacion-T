import React, { useState } from "react";
function Calculadora() {
  const [numero, setNumero] = useState("");

  const potenciar = () => {
    const num = parseFloat(numero);
    if (!isNaN(num)) {
      alert(`El cuadrado es: ${num ** 2}`);
    }
  };
  return (
    <div>
      Ingresar numero:
      <input
        type="number"
        onChange={(event) => setNumero(event.target.value)}
      ></input>
      <br></br>
      <button onClick={potenciar}>Numero al cuadrado</button>
    </div>
  );
}

export default Calculadora;
