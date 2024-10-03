let num1 = parseInt(prompt("Ingresa el valor del primer numero:"));
let num2 = parseInt(prompt("Ingresa el valor del segundo numero:"));
if (isNaN(num1) || isNaN(num2)) {
  alert("Ingresa un valor numerico");
} else {
  let resultado = num1 + num2;
  alert(`Suma: ${resultado}`);
}
