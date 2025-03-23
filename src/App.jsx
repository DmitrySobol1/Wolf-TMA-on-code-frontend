import React from 'react';
// import Button from '@mui/material/Button';
import axios from './axios';
import FirstEnter from './Components/FirstEnter';
import { useState,useEffect } from 'react';

const App = () => {
  const [result, setResult] = useState('');

  // Используем useEffect для выполнения запроса только при монтировании компонента
  useEffect(() => {
    axios.post('/api/enter', {
      tlgid: 777
    })
      .then(response => {
        console.log('Ответ от сервера:', response.data.result);
        if (response.data.result === 'created') {
          setResult('created');
          
        } else if (response.data.result === 'exist') {
          console.log('Ответ от сервера:', response.data);
          setResult('exist');
        }
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

  return (
    <>
      <div>{result === 'created' ? <FirstEnter/> : <FirstEnter/>}</div>
    </>
  );
};

export default App;
