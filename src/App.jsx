import React, { createContext } from 'react';
import { Routes, Route, Router } from "react-router";
import { useState,useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// // import { BrowserRouter } from "react-router";


import axios from './axios';
import FirstEnter from './Components/FirstEnter/FirstEnter';

import Game from './Components/Game/Game'
import Referal from './Components/Referal/Referal'
import Navigations from './Components/Navigations/Navigations'
import Exchange from './Components/Exchange/Exchange'
import Layout from './Components/Layout/Layout'
import Yellowbg from './Components/Yellowbg/Yellowbg'
import Level from './Components/Level/Level'



export const LanguageContext = createContext();
export const userLevelContext = createContext();

const App = () => {
  
const [language, setLanguage] = useState('ru');
const [userLevel,setUserLevel] = useState('')


return (
   
        <>
        <LanguageContext.Provider value = {{language, setLanguage}}>
        <userLevelContext.Provider value = {{userLevel,setUserLevel}}>
            <Level/>
            <Yellowbg />
            <Layout />
            <Navigations />
            </userLevelContext.Provider>
        </LanguageContext.Provider>        
        </>
   
  );

  

  
};

export default App;

