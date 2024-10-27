import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
// Simulamos una lista de productos
const products = [
    {
        id: 1,
        name: 'Pileta de Lona Pelopincho 4500Lts 300 x 200 x 75 cm',
        price: 199999,
        description: 'Descripción completa del Producto 1.',
        image: 'https://images.fravega.com/f300/41e25ecb1192a1069e316e227636e1e7.jpg.webp',
    },
    {
        id: 2,
        name: 'Auriculares Inalambricos Bluetooth Sony Wf-c500 Tactil',
        price: 20000,
        description: 'Descripción completa del Producto 2.',
        image: 'https://images.fravega.com/f300/7dddcf9e27e4e970b3edb3e6c249898a.jpg.webp',
    },
    {
        id:3,
        name:"Aire Acondicionado Split Frio/Calor Sansei 2800F 3300W SAS32HA3AN",
        price:764999,
        description: 'Descripción completa del Producto 3.',
        image:"https://images.fravega.com/f300/e3c5874e72104793c3c23c650af27388.jpg.webp",
    }
];

function ProductDetail() {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const navegate = useNavigate();
    const product = products.find(p => p.id === parseInt(id))

    if (!product) {
        return <div>Producto no encontrado</div>
    }

    const goToCart = () => {
        navegate('/cart');
    };

    return (
        <div>{product.name} <br/>
            <img src={product.image}></img>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>
                Agregar al Carrito
            </button>
            <button onClick={goToCart} style={{ marginLeft: '10px' }}>
                Ver Carrito
            </button>
        </div>
    )
}

export default ProductDetail