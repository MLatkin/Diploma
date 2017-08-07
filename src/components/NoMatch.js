import React from 'react';
import '../syles/components/NoMatch.css';
import sadSmile from '../images/sad.jpg';

const NoMatch = () => (
  <div className="no-match">
    Похоже, что такой страницы у нас нет :(
    <img src={sadSmile} alt=":(" />
  </div>
);

export default NoMatch;
