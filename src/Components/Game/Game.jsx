import React from 'react';
import axios from '../../axios';
import { useState, useEffect, useContext } from 'react';
import FirstEnter from '../FirstEnter/FirstEnter';
import { LanguageContext } from '../../App';
import { userLevelContext } from '../../App';
import style from './Game.module.css';
import i from '../../img/i.png';
import coin from '../../img/monet.png';
import battery from '../../img/battery-energy2.png';
import wolf1 from '../../img/wolf1.png';
import wolf2 from '../../img/wolf2.png';
import wolf3 from '../../img/wolf3.png';

const Game = () => {
  const [isFirstEnter, setFirstEnter] = useState(false);
  const [score, setScore] = useState('');
  const [energy, setEnergy] = useState('');
  const [wolfPicture, setWolfPicture] = useState(wolf1);

  const { language, setLanguage } = useContext(LanguageContext);
  const { userLevel, setUserLevel } = useContext(userLevelContext);

  const texts = {
    ru: {
      energy: 'энергия',
      info_score_title: 'Кликайте на волка, зарабатывайте баллы',
      info_score_text: 'баллы можно обменять на реальные монеты',
    },
    en: {
      energy: 'energy',
      info_score_title: 'Click on wolf and earn points',
      info_score_text: 'you can change point on real coins',
    },
    de: {
      energy: 'energie',
      info_score_title: 'Klicken sie auf den wolf und sammeln sie punkte',
      info_score_text: 'Punkte können gegen echte münzen eingetauscht werden',
    },
  };

  const energyMap = {
    ru: <>{texts.ru.energy}</>,
    en: <>{texts.en.energy}</>,
    de: <>{texts.de.energy}</>,
  };

  const clickHandler = () => {
    setScore(score + 1);
    setEnergy(energy - 1);

    axios
      .post('/api/scoreincrement', {
        tlgid: 777,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

  // для смены картинки
  useEffect(() => {
    if (score == 1150) {
      console.log('сейчас =1130');
      setUserLevel(2);
      setWolfPicture(wolf2);

      axios
        .post('/api/setuserLevel', {
          tlgid: 777,
          userLevel: 2,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
    } else if (score == 1160) {
      setUserLevel(3);
      setWolfPicture(wolf3);
      axios
        .post('/api/setuserLevel', {
          tlgid: 777,
          userLevel: 3,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
    }
  }, [score]);

  // для рендера
  useEffect(() => {
    axios
      .post('/api/enter', {
        tlgid: 777,
      })
      .then((response) => {
        console.log('Ответ от сервера:', response.data.result);
        if (response.data.result === 'created') {
          setFirstEnter(true);
        } else if (response.data.result === 'exist') {
          console.log('Ответ от сервера:', response.data);

          setScore(Number(response.data.score));
          setEnergy(Number(response.data.energy));
          setLanguage(response.data.language);
          setUserLevel(response.data.userLevel);
          if (response.data.userLevel==2){
            setWolfPicture(wolf2)
          } else if (response.data.userLevel==3){
            setWolfPicture(wolf3)
          }
        }
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []);

  // const handleLanguageChange = (event) => {
  //   setLanguage(event.target.value);
  // };

  return (
    <>
      {isFirstEnter ? (
        <FirstEnter setFirstEnter={setFirstEnter} />
      ) : (
        <>
          <div className={style.container}>
            <div className={style.scoreWrapper}>
              <div>
                <img src={coin} className={style.coin} />
              </div>
              <div className={style.score}>{score}</div>
              <>
                <img src={i} className={style.i} />
              </>
            </div>

            <div className={style.energyWrapper}>
              <img src={battery} className={style.battery} />
              <div className={style.energyText}>
                {energyMap[language]}: {energy}/1000
              </div>
            </div>

            <button onClick={clickHandler} className={style.wolf}>
              <img src={wolfPicture} />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Game;
