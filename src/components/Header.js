import React from 'react';
import { NavLink } from 'react-router-dom';
import '../syles/components/Header.css';

const Header = () => (
  <div className="header">
    <NavLink exact to="/">Главное меню</NavLink>
    <NavLink exact to="/developer">О разработчике</NavLink>
  </div>
);

export default Header;

