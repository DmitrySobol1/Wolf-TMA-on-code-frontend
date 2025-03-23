import React from 'react';
import { Routes, Route, Router } from "react-router";
// import ReactDOM from 'react-dom/client';
// // import { BrowserRouter } from "react-router";


import axios from './axios';
import FirstEnter from './Components/FirstEnter/FirstEnter';

import Game from './Components/Game/Game'
import Referal from './Components/Referal/Referal'
import Navigations from './Components/Navigations/Navigations'
import Exchange from './Components/Exchange/Exchange'



import { useState,useEffect } from 'react';


const App = () => {
  // const [result, setResult] = useState('');

  // Используем useEffect для выполнения запроса только при монтировании компонента
  // useEffect(() => {
  //   axios.post('/api/enter', {
  //     tlgid: 777
  //   })
  //     .then(response => {
  //       console.log('Ответ от сервера:', response.data.result);
  //       if (response.data.result === 'created') {
  //         setResult('created');
          
  //       } else if (response.data.result === 'exist') {
  //         console.log('Ответ от сервера:', response.data);
  //         setResult('exist');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Ошибка при выполнении запроса:', error);
  //     });
  // }, []); 


  // return (
  //   <>
  //     {result === 'created' ? (
  //       <>
  //       <Navigations />
  //       <FirstEnter />
  //       </>
        
  //     ) : (
  //       <>
  //         <Navigations />
          
  //         <Routes>
  //           <Route path="/" element={<div>main</div>} />
  //           <Route path="/game" element={<Game />} />
  //           <Route path="/referal" element={<Referal />} />
  //           <Route path="/exchange" element={<Exchange />} />
  //         </Routes>
          
  //       </>
  //     )}
  //   </>
  // );


  return (
   
        <>
          <Navigations />
          
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/referal" element={<Referal />} />
            <Route path="/exchange" element={<Exchange />} />
          </Routes>
          
        </>
   
  );

  

  
};

export default App;

