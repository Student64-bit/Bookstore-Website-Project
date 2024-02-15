import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar2 = ({ handleCategorySelect }) => {
  const handleCategoryClick = (category) => {
    handleCategorySelect(category); // Pass the selected category to the parent component
  };

  return (
    <nav className="navigation-bar2">
      <NavLink activeClassName="active" to="/all" onClick={() => handleCategoryClick('all')}>
        All
      </NavLink>
      <NavLink activeClassName="active" to="/fiction" onClick={() => handleCategoryClick('fiction')}>
        Fiction
      </NavLink>
      <NavLink activeClassName="active" to="/nonfiction" onClick={() => handleCategoryClick('nonfiction')}>
        Nonfiction
      </NavLink>
      <NavLink activeClassName="active" to="/comics" onClick={() => handleCategoryClick('comics')}>
        Comics
      </NavLink>
      <NavLink activeClassName="active" to="/kids" onClick={() => handleCategoryClick('kids')}>
        Kids
      </NavLink>
    </nav>
  );
};

export default NavBar2;
