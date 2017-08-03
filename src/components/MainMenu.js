import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div className="main-menu">
    <div><Link to="/games">Развивающие игры</Link></div>
    <div>Научные материалы</div>
    <div>Что-то еще</div>
    <div>что-то еще</div>
  </div>
);

export default MainMenu;
