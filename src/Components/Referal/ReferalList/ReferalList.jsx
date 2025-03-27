import React from 'react';
import axios from '../../../axios';
import { useState, useEffect, useContext } from 'react';
import style from './ReferalLisr.module.css';

// const tlgid = window.Telegram.WebApp.initDataUnsafe.user.id
// window.Telegram.WebApp.enableClosingConfirmation()
const tlgid = 666;

// const ReferalList = () => {
//   let referals = []
//       axios
//         .get('/api/getMyReferal', {
//           params : {tlgid: tlgid},
//         })
//         .then((response) => {
//           console.log('Ответ от сервера:', response.data);
//           referals = response.data.map((data) => (data.referalNameFull))
          
//         })
//         .catch((error) => {
//           console.error('Ошибка при выполнении запроса:', error);
//         });
    
//         console.log('re=',referals )

//   return (
//   <>
//   <ul>
//       {referals.map((referal, index) => (
//         <li key={index}>{referal}</li>
//       ))}
//     </ul>

//   </>
//   );
// };


const ReferalList = () => {
  const [referals, setReferals] = useState([]); // Храним данные в состоянии

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
      <div className = {style.boldText}>Список друзей:</div>
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
