// FirstEnter.js
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './FirstEnter.module.css';

const FirstEnter = ({ setFirstEnter }) => {
  const [language, setLanguage] = useState('ru');
  const navigate = useNavigate(); // Хук для навигации
  

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const clickHandler = () => {
    console.log('clicked');
    setFirstEnter(false)

    

  };

  const texts = {
    ru: {
      main: 'Забирай бонусные 1000 баллов и приступай к игре',
      btn: 'забрать бонус',
    },
    en: {
      main: 'You have 1000 bonuses: get and start game',
      btn: 'get bonus',
    },
    de: {
      main: 'Sichern Sie sich Ihre 1000 Bonuspunkte und steigen Sie ins Spiel ein',
      btn: 'die Prämie kassieren',
    },
  };

  const contentMap = {
    ru: <div>{texts.ru.main}</div>,
    en: <div>{texts.en.main}</div>,
    de: <div>{texts.de.main}</div>,
  };

  const btnText = {
    ru: texts.ru.btn,
    en: texts.en.btn,
    de: texts.de.btn,
  };

  return (
    <div className={style.popup}>
      <div>
        <label htmlFor="dropdown">Выберите язык:</label>
        <select id="dropdown" value={language} onChange={handleLanguageChange}>
          <option value="ru">русский</option>
          <option value="en">english</option>
          <option value="de">deutch</option>
        </select>
      </div>

      {contentMap[language]}

      <button onClick={clickHandler}>{btnText[language]}</button>
    </div>
  );
};

export default FirstEnter;