let actoresPrincipales = [
  "Tom Hanks",
  "Johnny Depp",
  "Elizabeth Taylor",
  "Morgan Freeman",
  "Jennnifer Aniston",
  "Meryl Streep",
  "Natalie Portman",
  "Ashton Kutcher",
];
function esVocal(palabra) {
  return "aeiou".includes(palabra.toLowerCase());
}
let actoresVocales = actoresPrincipales.filter((actor) => {
  let [nombre, apellido] = actor.split(" ");
  return esVocal(nombre[0]) || esVocal(apellido[0]);
});
//console.log(actoresVocales);
let peliculas = [];
let actoresPrincipalesPorPelicula = {
  Titanic: "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  Matrix: "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt",
};

actoresPrincipales.push(...Object.values(actoresPrincipalesPorPelicula));
console.log(actoresPrincipales);

peliculas.push(...Object.keys(actoresPrincipalesPorPelicula));
console.log(peliculas);

let peliculaPorActor = {
  "Leonardo DiCaprio": ["Titanic", "El lobo de Wall Street", "El origen"],
  "Al Pacino": ["El Padrino", "Perfume de mujer", "Fuego contra fuego"],
  "Keanu Reeves": ["Matrix", "John Wick", "El abogado del diablo"],
  "Robert Downey Jr": ["Iron Man", "Oppenheimer", "Spider-Man: lejos de casa"],
  "Will Smith": ["Soy leyenda", "Bad Boys", "En busca de la felicidad"],
  "Brad Pitt": ["Bastardos sin gloria", "Lobos", "Tren Bala"],
};
console.log(peliculaPorActor);
