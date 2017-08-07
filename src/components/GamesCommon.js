import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import Test1 from './Test1';
import Test2 from './Test2';
import '../syles/components/GamesCommon.css';

const Links = () => (
  <nav>
    <NavLink to="/games/1">Логические игры</NavLink>
    <NavLink to="/games/2">Развивающие игры</NavLink>
    <NavLink to="/games/3">Математические игры</NavLink>
    <NavLink to="/games/4">Загадки и ребусы</NavLink>
    <NavLink to="/games/5">Развивающие игры</NavLink>
  </nav>
);

const Category = () => (
  <div className="games-common">
    <Links />
    <Switch>
      <Route path="/games/1" component={Test1} />
      <Route path="/games/2" component={Test2} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Category;

