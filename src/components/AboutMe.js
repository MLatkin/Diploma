import React from 'react';
import vk from '../images/vk.png';
import git from '../images/git.png';
import '../syles/components/AboutMe.css';

const AboutMe = () => (
  <div className="about-page">
    <h3>Привет</h3>
    <p>
      Меня зовут Латкин Михаил и я разработал этот сайт.&nbsp;
      При разработке я использовал React.js. Исходный код можно&nbsp;
      посмотреть на GitHub по ссылке внизу страницы.
    </p>
    <a href="https://vk.com/fuckyoupotapov">
      <img src={vk} alt="VK" />
    </a>
    <a href="https://github.com/MLatkin/diploma">
      <img src={git} alt="Git" />
    </a>
  </div>
);

export default AboutMe;
