import React, { useContext } from 'react';
import style from './Level.module.css';
import BottomModal from '../BottomModal/BottomModal'
import { useState,useEffect } from 'react';
import { LanguageContext } from '../../App';
import { userLevelContext } from '../../App';
import { BottomModalContext } from '../../App';
import { TextForBottomModalContext } from '../../App';
import axios from '../../axios';
import wolficon from '../../img/wolfIcon.png';
import i from '../../img/i.png';
import { VisibleLanguageModalContext } from '../../App';
import { useTelegram } from '../../hooks/useTelegram';
import ru from '../../img/ru.png';
import en from '../../img/en.png';
import de from '../../img/de.png';



const Level = () => {

  // !!!!!!!!!!!!!!!!!!!!!!!!!
  // const tlgid = 777;
  const {tlgid} = useTelegram();

  const { language, setLanguage } = useContext(LanguageContext);
  const { userLevel, setUserLevel } = useContext(userLevelContext);
  const { isShowBottomModal, setShowBottomModal } = useContext(BottomModalContext);
  const { setBottomModalText } = useContext(TextForBottomModalContext);
  const { isVisibleLanguageModal, setVisibleLanguageModal } = useContext(VisibleLanguageModalContext);

  const [flagPic, setFlagPic] = useState(ru); 


 
 

    
  const handleLanguageChange = () => {
    setVisibleLanguageModal(!isVisibleLanguageModal);
   
  };


  useEffect(() => {
    let newFlag;
    if (language === 'ru') {
      newFlag = ru;
    } else if (language === 'en') {
      newFlag = en;
    } else {
      newFlag = de;
    }
    setFlagPic(newFlag);
  }, [language]);


  const iBtnHandler = ()=> {
    setShowBottomModal(!isShowBottomModal)
    setBottomModalText('level')
  }

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
    
    {/* {isShowBottomModal && <BottomModal props='level' /> } */}

      <div className={style.level}>
        <div className={style.container}>
            <div className={style.left}>
          
            <div><img src={wolficon} className={style.wolficon}/></div>
            <div>{levelMap[language]} : {userLevel}/3</div>
            <button onClick={iBtnHandler}><img src={i} className={style.i}/></button>
          
          </div>

           <div className={style.right}>
            {/* <button onClick = {handleLanguageChange}>{language}</button> */}
            <button onClick = {handleLanguageChange} className={style.flagBtn}><img src={flagPic} className={style.flag}/><span>{language}</span><span>&#9660;</span></button>

            {/* <label htmlFor="dropdown">Выберите язык:</label> */}
            {/* <select
              id="dropdown"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="ru">русский</option>
              <option value="en">english</option>
              <option value="de">deutch</option>
            </select> */}
          </div>
          </div> 
          <div>
        </div>
      </div>
    </>
  );
};

export default Level;
