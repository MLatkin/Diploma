import React from 'react';
import { Link } from 'react-router-dom';
import joystick from '../images/joystick.png';
import '../syles/components/MainMenu.css';

const MainMenu = () => (
  <div className="main-menu">

    <Link to="/games/1">
      <div>
        <img src={joystick} alt="Games" />
        <p>Игры</p>
      </div>
    </Link>
    <Link to="/games/1">
      <div>
        <img src={joystick} alt="Games" />
        <p>Игры</p>
      </div>
    </Link>
    <Link to="/games/1">
      <div>
        <img src={joystick} alt="Games" />
        <p>Игры</p>
      </div>
    </Link>
    <Link to="/games/1">
      <div>
        <img src={joystick} alt="Games" />
        <p>Игры</p>
      </div>
    </Link>
  </div>
);

export default MainMenu;
