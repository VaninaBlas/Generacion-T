function Pelicula(titulo, rating, loHasVisto) {
  this.titulo = titulo;
  this.rating = rating;
  this.loHasVisto = loHasVisto;
}

let pelicula1 = new Pelicula("Shrek", "5 estrellas", "Viste");
let pelicula2 = new Pelicula("Red", "4 estrellas", "Viste");
let pelicula3 = new Pelicula("Mi villano favorito 4", "4 estrella", "No viste");
let pelicula4 = new Pelicula("Dias Perfectos", "4 estrellas", "Viste");
let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4];
for (let i = 0; i < peliculas.length; i++) {
  console.log(
    `${peliculas[i].loHasVisto}  "${peliculas[i].titulo}" - ${peliculas[i].rating}`
  );
}
