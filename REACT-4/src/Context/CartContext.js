import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // cargar desde localstorage lo que ya tenemos 
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Verifica si el producto ya está en el carrito
            const productExists = prevCart.find(item => item.id === product.id);
    
            let updatedCart;
            if (productExists) {
                // Si ya está, incrementa la cantidad
                updatedCart = prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Si no está, agrégalo con cantidad 1
                updatedCart = [...prevCart, { ...product, quantity: 1 }];
            }
    
            // Guarda el carrito actualizado en localStorage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
    
    // Función para eliminar productos del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const product = prevCart.find(item => item.id === id);
    
            let updatedCart;
            if (product && product.quantity > 1) {
                // Reduce la cantidad si es mayor a 1
                updatedCart = prevCart.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                // Elimina el producto si la cantidad es 1 o menos
                updatedCart = prevCart.filter(item => item.id !== id);
            }
    
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
