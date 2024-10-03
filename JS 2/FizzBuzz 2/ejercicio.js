function fizzbuzz2(word1, word2, fizz_num, buzz_num, stop) {
  let list = [];
  for (let i = 1; i <= stop; i++) {
    if (i % fizz_num == 0 && i % buzz_num == 0) {
      list.push(word1 + word2);
    } else if (i % fizz_num == 0) {
      list.push(word1);
    } else if (i % buzz_num == 0) {
      list.push(word2);
    } else {
      list.push(i);
    }
  }
  return list.join(" , ");
}
let finish = prompt("¿Hasta que numero tiene que contar?");
let num1 = prompt("Numero para el Foo:");
let num2 = prompt("Numero para el Ter:");
let resultado = fizzbuzz2("Foo", "Ter", num1, num2, finish);
console.log(resultado);
