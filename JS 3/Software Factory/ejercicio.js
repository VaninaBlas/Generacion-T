let ecommerce = [
  { nombre: "Samsung TV", precio: 6000, articulos: 10 },
  { nombre: "DELL notebook", precio: 4000, articulos: 30 },
  { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
  { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
  { nombre: "Teclado Logitech", precio: 3000, articulos: 5 },
];
let total = [];
function totalArticulos(ecommerce) {
  total = [];
  ecommerce.forEach((producto) => {
    let totalP = producto.precio * producto.articulos;
    total.push({ nombre: producto.nombre, total: totalP });
  });
}
totalArticulos(ecommerce);
console.log(total);
