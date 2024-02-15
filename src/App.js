import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import NavBar2 from './Components/NavBar2';
import SearchBar from './Components/SearchBar';
import Book from './Components/Book';
import BooksData from './Components/BookData';
import Cart from './Components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [books, setBooks] = useState(BooksData);
  const [filteredBooks, setFilteredBooks] = useState(BooksData);

  const handleSearch = (searchTerm) => {
    const filtered = BooksData.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  // Function to filter books based on selected category
  const handleCategorySelect = (category) => {
    if (category === 'all') {
      setFilteredBooks(BooksData); // Show all books when 'all' is selected
    } else {
      const filtered = BooksData.filter((book) => book.category === category);
      setFilteredBooks(filtered);
    }
  };

  const addToCart = (book) => {
    setCart((currentCart) => {
      const existingBook = currentCart.find((item) => item.id === book.id);

      if (existingBook) {
        const updatedCart = currentCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      } else {
        const updatedCart = [...currentCart, { ...book, quantity: 1 }];
        return updatedCart;
      }
    });
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <Router>
      <NavBar onCartClick={toggleCart} />
      <NavBar2 handleCategorySelect={handleCategorySelect} />
      <SearchBar onSearch={handleSearch} />

      <div className={isCartVisible ? 'dim-background' : ''}>
        <div className="books-container">
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
      {isCartVisible && <Cart items={cart} onClose={toggleCart} />}
    </Router>
  );
};

export default App;
