import React from 'react';
import axios from '../../../axios';
import { useState, useEffect, useContext } from 'react';
import style from './ReferalLisr.module.css';
import { LanguageContext } from '../../../App';
import { useTelegram } from '../../../hooks/useTelegram';



const ReferalList = () => {
  const [referals, setReferals] = useState([]); // Храним данные в состоянии
  const { language, setLanguage } = useContext(LanguageContext);

  // const tlgid = 777;
    const {tlgid} = useTelegram();

  const list = {
    ru: <>Список друзей:</>,
    en: <>List of friend:</>,
    de: <>Freundesliste:</>,
  }
  


  useEffect(() => {
    axios.get('/api/getMyReferal', { params: { tlgid: tlgid } })
      .then((response) => {
        const names = response.data.map((data) => data.referalNameFull);
        setReferals(names); // Обновляем состояние → React перерендерит компонент
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, []); // Пустой массив зависимостей = запрос только при первом рендере

  return (
    <>
    <div className = {style.wrapper}>
    <div className = {style.container}>
      <div className = {style.boldText}>{list[language]}</div>
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
