import React from 'react';
import Button from '@mui/material/Button';
import axios from './axios';
import { useState } from 'react';

const App = () => {

    const [score,setScore] = useState(1123)

    function clickHandler() {
        console.log('clicked')
        setScore(score+1)
        
        axios.post('/scoreincrement', {
            tlgid: 20,
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error('Ошибка:', error);
          });
    
}

  return (
    <>
      <div>{score}</div>
      
      <Button variant="contained" color="primary" onClick={clickHandler}>
        Нажми меня
      </Button>
    </>
  );
};

export default App;
