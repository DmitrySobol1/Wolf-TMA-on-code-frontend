import React, { useContext } from 'react';
import style from './Level.module.css';
import { useState } from 'react';
import { LanguageContext } from '../../App';
import { userLevelContext } from '../../App';
import axios from '../../axios';
import wolficon from '../../img/wolfIcon.png'
import i from '../../img/i.png'

const Level = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { userLevel, setUserLevel } = useContext(userLevelContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);

    axios
      .post('/api/setlanguage', {
        tlgid: 777,
        language: event.target.value,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

  const texts = {
    ru: {
      level: 'Уровень',
    },
    en: {
      level: 'Level',
    },
    de: {
      level: 'Pumpniveau',
    },
  };

  const levelMap = {
    ru: <>{texts.ru.level}</>,
    en: <>{texts.en.level}</>,
    de: <>{texts.de.level}</>, 
  };

  return (
    <>
      <div className={style.level}>
        <div className={style.container}>
            <div className={style.left}>
          
            <div><img src={wolficon} className={style.wolficon}/></div>
            <div>{levelMap[language]} : {userLevel}/3</div>
            <img src={i} className={style.i}/>
          
          </div>

           <div className={style.right}>
            {/* <label htmlFor="dropdown">Выберите язык:</label> */}
            <select
              id="dropdown"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="ru">русский</option>
              <option value="en">english</option>
              <option value="de">deutch</option>
            </select>
          </div>
          </div> 
          <div>
        </div>
      </div>
    </>
  );
};

export default Level;
