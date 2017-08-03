import React from 'react';
import vk from '../images/vk.png';

const AboutMe = () => (
  <div className="about-page">
    <div>Привет! <br /> Меня зовут Латкин Михаил и я разработал этот сайт:)</div>
    <div>Мои контакты:</div>
    <a href="https://vk.com/fuckyoupotapov"><img src={vk} alt="VK" /></a>
  </div>
);

export default AboutMe;
