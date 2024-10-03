function triplicador(num) {
  return num * 3;
}
function multiplicador(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function resto(num1, num2) {
  return num1 % num2;
}
let triple = triplicador(5);
let multi = multiplicador(triple, 12);
let div = division(multi, 12);
let rt = resto(div, 3);
console.log(rt);
