import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
  return (
    <div>
    <h3>This is header</h3>
     <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mobiles">Mobiles</NavLink>
      <NavLink to="/laptops">Laptops</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/services">My Services</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/users2">Users2</NavLink>
      
     </nav>
    </div>
  );
};

export default Header;