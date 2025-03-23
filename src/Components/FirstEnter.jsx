import React from 'react';
import style from './FirstEnter.module.css';
import { useState } from 'react';

const FirstEnter = () => {
    const [language, setLanguage] = useState('ru');
  
    const handleChange = (event) => {
      setLanguage(event.target.value);
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
        ru: <div>{texts.ru.btn}</div>,
        en: <div>{texts.en.btn}</div>,
        de: <div>{texts.de.btn}</div>,
      };
  
    return (
      <div className={style.popup}>
        <div>
          <label htmlFor="dropdown">Выберите язык:</label>
          <select id="dropdown" value={language} onChange={handleChange}>
            <option value="ru">русский</option>
            <option value="en">english</option>
            <option value="de">deutch</option>
          </select>
        </div>
  
        {contentMap[language]}

        <button>{btnText[language]}</button>

      </div>
    );
  };

export default FirstEnter;
