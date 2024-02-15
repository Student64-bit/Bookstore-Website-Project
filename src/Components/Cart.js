import React from 'react';

function Cart({ items, onClose }) {
    const cartItems = items.reduce((acc, item) => {
        acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
        acc[item.id].quantity++;
        return acc;
    }, {});

    const totalPrice = Object.values(cartItems).reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const totalItems = Object.values(cartItems).reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <div className="cart-overlay">
            <button onClick={onClose}>Close Cart</button>
            <h2>Cart Order Summary</h2>
            <h1><div>Subtotal ({totalItems} Items:) ${totalPrice.toFixed(2)}</div></h1>
            
            {Object.values(cartItems).map((item) => (
                <div key={item.id}>
                    {item.title} - ${item.price}
                </div>
            ))}
            
        </div>
    );
}

export default Cart;
