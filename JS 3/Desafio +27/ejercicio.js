let personas = [
  { nombre: "Ana", edad: 28 },
  { nombre: "Maria", edad: 24 },
  { nombre: "Jose", edad: 31 },
];
let personasConMasDe27 = personas.filter((age) => age.edad >= 27);
console.log(personasConMasDe27);
