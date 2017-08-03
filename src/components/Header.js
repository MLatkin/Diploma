import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <Link to="/">Главное меню</Link>
    <Link to="/developer">О разработчике</Link>
  </div>
);

export default Header;

