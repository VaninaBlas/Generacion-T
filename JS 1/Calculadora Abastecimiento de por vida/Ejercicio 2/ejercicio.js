let dias = parseInt(prompt("Cantidad de dias que vas a estar de vacaciones:"));
let preMax = parseFloat(prompt("Presupuesto maximo para el viaje"));
let comida = parseInt(prompt("Estimado de comidas en todo el viaje:"));
if ( isNaN(dias) || isNaN(preMax) || isNaN(comida) || dias <= 0 || preMax <= 0 || comida <= 0
) {
  alert("Por favor, ingresa valores numéricos válidos y positivos.");
} else {
  let gasto = preMax / comida;
  alert(
    `Podés gastar ${gasto.toFixed(
      2
    )} en cada comida para que te alcance la plata durante los ${dias} días del viaje.`
  );
}
