import React from 'react';
import { useState, useEffect, useContext } from 'react';
import style from './ExchangeLevel2.module.css';
import echange from '../../../img/echange.png';

import { TEXTS } from './texts';
import axios from '../../../axios';

import { useTelegram } from '../../../hooks/useTelegram';

import { LanguageContext } from '../../../App';
import { ScoreContext } from '../../../App';

const ExchangeLevel2 = () => {

  // FIXME: поменять в проде + hooks>useTelegram 
  const tlgid = 777;
  // const {tlgid} = useTelegram();


  const { language, setLanguage } = useContext(LanguageContext);
  const { score, setScore } = useContext(ScoreContext);

  const { btnText, labelWallet, btnNextText, inputPlaceholder, emptyInputAlert,labelSum, inputPlaceholder2, emptyInputAlert2, wrongSumAlert, notEnoughPointAlert,  textRqstSentToAdmin } =
    TEXTS[language];

  const [changeStep, setChangeStep] = useState(1);
  const [inputText, setInputText] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [isShowEmptyInputAlert, setShowEmptyInputAlert] = useState(false);
  // const [isShowWrongSumAlert, setShowWrongSumAlert] = useState(false);
  const [alertText,setAlertText] = useState('');



  function btnChangeHandler() {
    setChangeStep(2);
  }
  
  function btnNextHandler() {
    if (inputText === '') {
      console.log ('введи кошелек')
      setAlertText(`${emptyInputAlert}`)
      setShowEmptyInputAlert(true)

    } else {

      setChangeStep(3);
    }
  }
  
  function btnNextHandler2() {
    if (inputText2 === '') {
      setAlertText(`${emptyInputAlert2}`)
      setShowEmptyInputAlert(true)
      
    } else if (Number(inputText2) % 2500 != 0) {
        console.log ('сумма не ок')
        setAlertText(`${wrongSumAlert}`)
        setShowEmptyInputAlert(true)
    }else if (Number(score) < Number(inputText2) ) {
      setAlertText(`${notEnoughPointAlert}`)
      setShowEmptyInputAlert(true)
    } else {
      console.log('all ok')
      setChangeStep(4);


      axios
      .post('/api/changeRqst', {
        tlgid: tlgid,
        walletAdress: inputText,
        sum: inputText2
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });

    }

    }
  




  function inputHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
    setShowEmptyInputAlert(false)
  }
  
  function inputHandler2(e) {
    console.log(e.target.value);
    setInputText2(e.target.value);
    setShowEmptyInputAlert(false)
    
  }




  return (
    <>
      {changeStep === 1 ? 
        <div>
          <button className={style.btnAddFriend} onClick={btnChangeHandler}>
            <img src={echange} className={style.iconBtnAddFriend} />
            <span>{btnText}</span>
          </button>
          <p>some 1</p>
        </div>
       : changeStep === 2 ?
        <>
          <div className={style.label}>{labelWallet}</div>
          <div>
            <input
              className={style.inputWallet}
              onChange={inputHandler}
              value={inputText}
              placeholder={`${inputPlaceholder} UQAw8-OzyiZWzkScZsHoFfjuzJD5xsSToteeqR3YPOU8f5uA`}
            />
          </div>
          <button className={style.btnAddFriend} onClick={btnNextHandler}>
            <span>{btnNextText}</span>
          </button>
          {isShowEmptyInputAlert ? <div className = {style.emptyInputAlert}>{alertText}</div>:''}
          <p>some 2</p>
        </>
        : changeStep === 3 ?
        <>
          <div className={style.label}>{labelSum}</div>
          <div>
            <input
              className={style.inputWallet}
              onChange={inputHandler2}
              value={inputText2}
              placeholder={`${inputPlaceholder2}`}
            />
          </div>
          <button className={style.btnAddFriend} onClick={btnNextHandler2}>
            <span>{btnNextText}</span>
          </button>
          {isShowEmptyInputAlert ? <div className = {style.emptyInputAlert}>{alertText}</div>:''}
          {/* {isShowWrongSumAlert ? <div className = {style.emptyInputAlert}>{wrongSumAlert}</div>:''} */}
        </>
        : <div>{textRqstSentToAdmin}</div>
        
      }
    </>
  );
};

export default ExchangeLevel2;
