import React from 'react';
import axios from '../../../axios';
import { useState, useEffect, useContext } from 'react';
import style from './ReferalLisr.module.css';
import { LanguageContext } from '../../../App';
import { useTelegram } from '../../../hooks/useTelegram';
import { TEXTS } from './texts';


const ReferalList = () => {

  // FIXME: поменять в проде + hooks>useTelegram 
  // const tlgid = 777;
  const {tlgid} = useTelegram();


  const [referals, setReferals] = useState([]); 
  const [isShowHasFriend, setShowHasFriend] = useState(true); 
  const { language, setLanguage } = useContext(LanguageContext);

 

    const { text } = TEXTS[language];

  const list = {
    ru: <>Список друзей:</>,
    en: <>List of friends:</>,
    de: <>Freundesliste:</>,
  }
  


  useEffect(() => {
    axios.get('/api/getMyReferal', { params: { tlgid: tlgid } })
      .then((response) => {
        console.log(response.data.length)
        if (response.data.length > 0){
          setShowHasFriend(false)
        }
        const names = response.data.map((data) => data.referalNameFull);
        setReferals(names); 
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, []); 

  return (
    <>
    <div className = {style.wrapper}>
    <div className = {style.container}>
      <div className = {style.boldText}>{list[language]}</div>
      {isShowHasFriend ?<div className={style.noFriend}>{text}</div>: ''}
      <div className = {style.list}>
      {referals.map((referal, index) => (
        <div key={index} className = {style.item}>{index+1}. {referal}</div>
      ))}
      </div>
      </div>
      </div>
    </>
  );
};



export default ReferalList;
