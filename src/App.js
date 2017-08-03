import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Games from './components/Games';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

const App = () => (
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route path="/games" component={Games} />
      <Route path="/developer" component={AboutMe} />
    </Switch>
  </main>
);

export default App;
