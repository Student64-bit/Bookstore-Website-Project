import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';

const NavBar = ({ onCartClick }) => {
  return (
    <nav className="navigation-bar">
      <NavLink activeClassName="active" exact to="/home">HOME</NavLink>
      <NavLink activeClassName="active" exact to="/Membership">MEMBERSHIP</NavLink>
      
      <img 
        src="/images/addToCart.jpg" 
        alt="Cart"
        onClick={onCartClick}
        className="cart-icon"
      />

      <Login/>
      



    </nav>
  );
};

export default NavBar;