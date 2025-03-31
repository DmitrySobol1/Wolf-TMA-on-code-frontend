import React from 'react';
import axios from '../../axios';
import { useState, useEffect, useContext } from 'react';
import FirstEnter from '../FirstEnter/FirstEnter';
import { LanguageContext } from '../../App';
import { ScoreContext } from '../../App';
import { userLevelContext } from '../../App';
import style from './Game.module.css';
import i from '../../img/i.png';
import coin from '../../img/monet.png';
import battery from '../../img/battery-energy2.png';
import wolf1 from '../../img/wolf1.png';
import wolf2 from '../../img/wolf2.png';
import wolf3 from '../../img/wolf3.png';
import BottomModal from '../BottomModal/BottomModal';
import { BottomModalContext } from '../../App';
import { TextForBottomModalContext } from '../../App';
import { motion, AnimatePresence } from 'framer-motion';
import { useTelegram } from '../../hooks/useTelegram';



const level2 = 1400;
const level3 = 1430;

const Game = () => {

  // FIXME: поменять в проде + hooks>useTelegram 
  const tlgid = 777;
  // const {tlgid} = useTelegram();

  const [isFirstEnter, setFirstEnter] = useState(false);
  // const [score, setScore] = useState('');
  const [energy, setEnergy] = useState('');
  const [wolfPicture, setWolfPicture] = useState(wolf1);
  const [isWolfButtonActive, setWolfButtonActive] = useState(true);

  const { language, setLanguage } = useContext(LanguageContext);
  const { score, setScore } = useContext(ScoreContext);
  const { userLevel, setUserLevel } = useContext(userLevelContext);
  const { isShowBottomModal, setShowBottomModal } =
    useContext(BottomModalContext);
  const { setBottomModalText } = useContext(TextForBottomModalContext);

  const [floatingNumbers, setFloatingNumbers] = useState([]);
  const { vibrate } = useTelegram();

  

  function iBtnHandler() {
    setShowBottomModal(!isShowBottomModal);
    setBottomModalText('game');
  }

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

  const clickHandler = (e) => {
    if (isWolfButtonActive) {
      setScore(score + 1);
      setEnergy(energy - 1);

      vibrate('light');

      const rect = e.currentTarget.getBoundingClientRect();
      setFloatingNumbers((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          value: '+1',
        },
      ]);

      axios
        .post('/api/scoreincrement', {
          tlgid: tlgid,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
    }
  };

  // для смены картинки
  // useEffect(() => {
  //   if (score === level2) {
  //     setUserLevel(2);
  //     setWolfPicture(wolf2);
  //     setShowBottomModal(!isShowBottomModal);
  //     setBottomModalText('newLevelAchived');

  //     axios
  //       .post('/api/setuserLevel', {
  //         tlgid: tlgid,
  //         userLevel: 2,
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Ошибка:', error);
  //       });
  //   } else if (score === level3) {
  //     setUserLevel(3);
  //     setWolfPicture(wolf3);
  //     setShowBottomModal(!isShowBottomModal);
  //     setBottomModalText('newLevelAchived');
  //     axios
  //       .post('/api/setuserLevel', {
  //         tlgid: tlgid,
  //         userLevel: 3,
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Ошибка:', error);
  //       });
  //   }
  // }, [score]);

  // для отслеживания энергии
  useEffect(() => {
    if (energy === 0) {
      console.log('энергии 0');
      setShowBottomModal(!isShowBottomModal);
      setBottomModalText('emptyEnergy');
      setWolfButtonActive(false);

      // axios
      //   .post('/api/setuserLevel', {
      //     tlgid: 777,
      //     userLevel: 2,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error('Ошибка:', error);
      //   });
    }
  }, [energy]);

  // для рендера
  useEffect(() => {
    axios
      .post('/api/enter', {
        tlgid: tlgid,
        language: language,
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
          if (response.data.userLevel === 2) {
            setWolfPicture(wolf2);
          } else if (response.data.userLevel === 3) {
            setWolfPicture(wolf3);
          }
        }
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, [isFirstEnter]);

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
                <img src={coin} className={style.coin} alt="coin" />
              </div>
              <div className={style.score}>{score}</div>
              <>
                <button onClick={iBtnHandler}>
                  <img src={i} className={style.i} alt="info" />
                </button>
              </>
            </div>

            <div className={style.energyWrapper}>
              <img src={battery} className={style.battery} alt="battery" />
              <div className={style.energyText}>
                {energyMap[language]}: {energy}/1000
              </div>
            </div>

            <AnimatePresence>
              {floatingNumbers.map((num) => (
                <motion.div
                  key={num.id}
                  initial={{
                    opacity: 1,
                    scale: 1,
                    x: num.x,
                    y: num.y,
                    position: 'absolute',
                    color: '#ffffff',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    pointerEvents: 'none',
                    textShadow: '0 0 5px rgba(0,0,0,0.5)',
                    zIndex: 100,
                  }}
                  animate={{
                    y: num.y - 100,
                    opacity: 0,
                    scale: 1.5,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                  }}
                  onAnimationComplete={() => {
                    setFloatingNumbers((prev) =>
                      prev.filter((n) => n.id !== num.id)
                    );
                  }}
                >
                  {num.value}
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              onClick={clickHandler}
              className={style.wolf}
              initial={false}
              // whileTap={{ scale: 0.99, transition: { duration: 0.01 } }}
              whileTap={{ scale: 0.99, transition: { duration: 0.01 } }}
            >
              <img src={wolfPicture} alt="wolf" />
            </motion.button>
          </div>
        </>
      )}
    </>
  );
};

export default Game;
