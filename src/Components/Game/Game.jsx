import React from 'react'
import axios from '../../axios';
import { useState,useEffect } from 'react';
import FirstEnter from '../FirstEnter/FirstEnter'
// import { useLocation } from 'react-router-dom';

const Game = () => {

 const [isFirstEnter,setFirstEnter] = useState(false)




//  // Используем useEffect для выполнения запроса только при монтировании компонента

//     axios.post('/api/enter', {
//       tlgid: 777
//     })
//       .then(response => {
//         console.log('Ответ от сервера:', response.data.result);
//         if (response.data.result === 'created') {
//           setResult('created');
          
//         } else if (response.data.result === 'exist') {
//           console.log('Ответ от сервера:', response.data);
//           setResult('exist');
//         }
//       })
//       .catch(error => {
//         console.error('Ошибка при выполнении запроса:', error);
//       });



    axios.post('/api/enter', {
      tlgid: 777
    })
      .then(response => {
        console.log('Ответ от сервера:', response.data.result);
        if (response.data.result === 'created') {
          setFirstEnter(true)
          
        } else if (response.data.result === 'exist') {
          console.log('Ответ от сервера:', response.data);
          // setResult('exist');
        }
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  


return ( 
<>

  {isFirstEnter ? <FirstEnter setFirstEnter={setFirstEnter} /> : <div>рендер Игры</div>}

  <div>GAME</div>
  
</>
)
}


export default Game