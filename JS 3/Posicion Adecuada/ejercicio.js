let personas = [
  { nombre: "Alba", edad: 15 },
  { nombre: "Estrella", edad: 30 },
  { nombre: "Belen", edad: 20 },
  { nombre: "Santiago", edad: 4 },
  { nombre: "Katherine", edad: 55 },
];
personas.sort((a, b) => {
  return a.edad - b.edad;
});

console.log(personas);
personas.forEach((persona, indice) => {
  persona.posicion = indice + 1;
});

console.log(personas);
