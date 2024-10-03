import React, { useState } from "react";

function Productos() {
  const [products, setProducts] = useState([
    { id: 1, name: "arroz", price: 2500 },
    { id: 2, name: "agua", price: 1200 },
    { id: 3, name: "speed", price: 1400 },
  ]);
  const calcularTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return <div>Precio: {calcularTotal()}</div>;
}

export default Productos;
