import React, { useState } from 'react';

function Book({ book, onAddToCart }) {
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCartClick = () => {
        onAddToCart(book);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000); 
    };

    return (
        <div className="book-item">
            <img 
                src={book.image} 
                alt={book.title} 
            />
            {showPopup && <div className="popup-message">Added to cart!</div>}
            <button 
                className="add-to-cart-button" 
                onClick={handleAddToCartClick}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Book;
