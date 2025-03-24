import React from 'react';
import { NavLink } from 'react-router';
import style from './Navigations.module.css';
import { LanguageContext } from '../../App';
import { useContext } from 'react';
import gameImg from '../../img/game.png';
import friendImg from '../../img/friend.png';
import changeImg from '../../img/echange.png';

const Navigations = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const texts = {
    ru: {
      game: 'ИГРАТЬ',
      friend: 'ДРУЗЬЯ',
      change: 'ОБМЕН',
    },
    en: {
      game: 'PLAY',
      friend: 'FRIEND',
      change: 'CHANGE',
    },
    de: {
      game: 'SPIELEN',
      friend: 'FREUNDE',
      change: 'TAUSCH',
    },
  };

  const playMap = {
    ru: <div>{texts.ru.game}</div>,
    en: <div>{texts.en.game}</div>,
    de: <div>{texts.de.game}</div>,
  };

  const friendMap = {
    ru: <div>{texts.ru.friend}</div>,
    en: <div>{texts.en.friend}</div>,
    de: <div>{texts.de.friend}</div>,
  };

  const changeMap = {
    ru: <div>{texts.ru.change}</div>,
    en: <div>{texts.en.change}</div>,
    de: <div>{texts.de.change}</div>,
  };

  return (
    <div className={style.navigations}>
      <div className={style.wrapper}>
        {/* <nav> */}

        <div className={style.button}>
          <div><img src={gameImg} className={style.btnIcon}/></div>
          <div><NavLink to="/">{playMap[language]}</NavLink></div>
        </div>

        <div className={style.button}>
        <div><img src={friendImg} className={style.btnIcon}/></div>
         <div> <NavLink to="/referal">{friendMap[language]}</NavLink></div>
        </div>
        
        <div className={style.button}>
        <div><img src={changeImg} className={style.btnIcon}/></div>
         <div> <NavLink to="/exchange">{changeMap[language]}</NavLink></div>
        </div>

        {/* </nav> */}
      </div>
    </div>
  );
};

export default Navigations;
