import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './LanguageModal.module.css';
import { LanguageContext } from '../../App';
import { VisibleLanguageModalContext } from '../../App';
import axios from '../../axios';
import { TEXTS } from './texts';

import ru from '../../img/ru.png';
import en from '../../img/en.png';
import de from '../../img/de.png';

const LanguageModal = () => {
  
  // !!!!!!!!!!!!!!!!!!!!!!!!!
  // const tlgid = 777;
  const {tlgid} = useTelegram();

  const navigate = useNavigate(); // Хук для навигации
  const { language, setLanguage } = useContext(LanguageContext);
  const { isVisibleLanguageModal, setVisibleLanguageModal } = useContext(
    VisibleLanguageModalContext
  );

  const { titlezzz = 'ru' } = TEXTS[language];


  const closeBtnHandler = () =>{
    setVisibleLanguageModal(!isVisibleLanguageModal);
  }


  const clickHandler = (event) => {
    const buttonId = event.currentTarget.dataset.lang;
    console.log('clicked', buttonId);

    setLanguage(buttonId);

    axios
      .post('/api/setlanguage', {
        tlgid: tlgid,
        language: buttonId,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });

    setVisibleLanguageModal(!isVisibleLanguageModal);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.popup}>
      
      <button onClick={closeBtnHandler}>
        <span className={style.closeBtn}>&times;</span>
      </button>
      
        <div className={style.text}>{titlezzz}</div>

        <div className={style.btnWrapper}>
          <button
            onClick={clickHandler}
            data-lang="ru"
            className={style.button}
          >
            <img src={ru} className={style.flag} />
            русский
          </button>
          <button
            onClick={clickHandler}
            data-lang="en"
            className={style.button}
          >
            <img src={en} className={style.flag} />
            english
          </button>
          <button
            onClick={clickHandler}
            data-lang="de"
            className={style.button}
          >
            <img src={de} className={style.flag} />
            deutsch
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
