let notas = [
  {
    Estudiante: "Juan",
    nota: 6,
  },
  {
    Estudiante: "Mario",
    nota: 8,
  },
  {
    Estudiante: "Julia",
    nota: 10,
  },
  {
    Estudiante: "Sofia",
    nota: 2,
  },
];
let aumentar = notas.map(function (nota) {
  if (nota.nota >= 5 && nota.nota < 10 && nota.nota != 9) {
    nota.nota = nota.nota + 2;
  } else if (nota.nota === 9) {
    nota.nota = nota.nota + 1;
  }
  return nota;
});
console.log(aumentar);
