import React from 'react';
import { NavLink } from 'react-router';
import style from './Navigations.module.css';
import { LanguageContext } from '../../App';
import { NavigationButtonContext } from '../../App';
import { useContext, useState } from 'react';
import gameImg from '../../img/game.png';
import friendImg from '../../img/friend.png';
import changeImg from '../../img/echange.png';

const Navigations = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { isShowNavigateButton, setShowNavigateButton } = useContext(NavigationButtonContext);

  // const [ isShowNavigateButton, setShowNavigateButton ] = useState(false);

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
    ru: <>{texts.ru.game}</>,
    en: <>{texts.en.game}</>,
    de: <>{texts.de.game}</>,
  };

  const friendMap = {
    ru: <>{texts.ru.friend}</>,
    en: <>{texts.en.friend}</>,
    de: <>{texts.de.friend}</>,
  };

  const changeMap = {
    ru: <>{texts.ru.change}</>,
    en: <>{texts.en.change}</>,
    de: <>{texts.de.change}</>,
  };

  return (
    <>

    {isShowNavigateButton ? (
       <div className={style.navigations}>
       <div className={style.wrapper}>
         {/* Кнопка "Играть" */}
         <NavLink to="/">
           {({ isActive }) => (
             <div className={isActive ? style.buttonActive : style.button}>
               <div>
                 <img src={gameImg} className={style.btnIcon} alt="Game" />
               </div>
               <div className={style.text}>{playMap[language]}</div>
             </div>
           )}
         </NavLink>

         {/* Кнопка "Друзья" */}
         <NavLink to="/referal">
           {({ isActive }) => (
             <div className={isActive ? style.buttonActive : style.button}>
               <div>
                 <img
                   src={friendImg}
                   className={style.btnIcon}
                   alt="Friend"
                 />
               </div>
               <div className={style.text}>{friendMap[language]}</div>
             </div>
           )}
         </NavLink>

         {/* Кнопка "Обмен" */}
         <NavLink to="/exchange">
           {({ isActive }) => (
             <div className={isActive ? style.buttonActive : style.button}>
               <div>
                 <img
                   src={changeImg}
                   className={style.btnIcon}
                   alt="Exchange"
                 />
               </div>
               <div className={style.text}>{changeMap[language]}</div>
             </div>
           )}
         </NavLink>
       </div>
     </div>
    ) : (
      <div>Меню скрыто</div>
    )}
        



       
         
    </>
  );
};

export default Navigations;
