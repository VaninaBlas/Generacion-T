let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  numeros_duplicados[numero] = numero * 2;
}
console.log(numeros_duplicados);
