import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import GamesCommon from './components/GamesCommon';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import AboutMe from './components/AboutMe';

import './syles/App.css';

const App = () => (
  <main>
    <Header />
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/games/:id" component={GamesCommon} />
        <Route path="/developer" component={AboutMe} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </main>
);

export default App;
