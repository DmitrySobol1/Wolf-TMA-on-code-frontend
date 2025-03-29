import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './FirstEnter.module.css';
import { LanguageContext } from '../../App';

const FirstEnter = ({ setFirstEnter }) => {
  
  const navigate = useNavigate(); 
  const { language, setLanguage } = useContext(LanguageContext);
  

  
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
      main: 'You have 1000 bonuses points: get it and start game',
      btn: 'get bonus',
    },
    de: {
      main: 'Sichern Sie sich Ihre 1000 Bonuspunkte und steigen Sie ins Spiel ein',
      btn: 'die Prämie kassieren',
    },
  };

  const contentMap = {
    ru: <>{texts.ru.main}</>,
    en: <>{texts.en.main}</>,
    de: <>{texts.de.main}</>,
  };

  const btnText = {
    ru: texts.ru.btn,
    en: texts.en.btn,
    de: texts.de.btn,
  };

  return (
    <div className = {style.wrapper}>
    <div className={style.popup}>
     
      <div className = {style.text}>{contentMap[language]}</div>

      <button onClick={clickHandler} className = {style.button}>{btnText[language]}</button>
    </div>
    </div>
  );
};

export default FirstEnter;