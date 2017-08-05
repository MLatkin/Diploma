import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import GamesList from './components/GamesList';
import Category from './components/Category';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import './syles/App.css';

const App = () => (
  <main>
    <Header />
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/games/category" component={Category} />
        <Route path="/games/list" component={GamesList} />
        <Route path="/developer" component={AboutMe} />
      </Switch>
    </div>
  </main>
);

export default App;
