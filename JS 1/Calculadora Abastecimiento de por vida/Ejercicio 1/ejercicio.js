let edad = parseInt(prompt("Ingresa tu edad:"));
let edadMax = parseInt(prompt("Ingresa tu edad maxima:"));
let snack = prompt("Ingresa tu snack favorito:");
let cantSnack = parseInt(prompt("Ingrese cuantos snacks comerás por dia"));
let cantidad = 365 * (edadMax - edad) * cantSnack;

if (isNaN(edad) || isNaN(edadMax) || isNaN(cantSnack)) {
  alert("Por favor, ingresa valores numéricos válidos.");
} else {
  alert(
    `Necesitaras ${cantidad} ${snack} para que te alcancen hasta los ${edadMax} años.`
  );

  let precio = parseFloat(prompt("Ingresa el precio del snack:"));
  if (isNaN(precio)) {
    alert("Por favor, ingresa un precio válido.");
  } else {
    let total = precio * cantidad;
    alert(`Gastarias ${total.toFixed(2)} pesos`);
  }
}
