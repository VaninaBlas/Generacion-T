import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


export default Cart;
