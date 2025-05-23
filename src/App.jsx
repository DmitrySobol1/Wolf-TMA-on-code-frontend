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
import BottomModal from './Components/BottomModal/BottomModal'
import LanguageModal from './Components/LanguageModal/LanguageModal';



export const LanguageContext = createContext();
export const userLevelContext = createContext();
export const BottomModalContext = createContext();
export const TextForBottomModalContext = createContext();
export const VisibleLanguageModalContext = createContext();
export const ScoreContext = createContext();
export const NavigationButtonContext = createContext();

   

const App = () => {
  
const [language, setLanguage] = useState('');
const [userLevel,setUserLevel] = useState('')
const [isShowBottomModal,setShowBottomModal] = useState(false)
const [bottomModalText,setBottomModalText] = useState('')
const [isVisibleLanguageModal,setVisibleLanguageModal] = useState('false')
const [score, setScore] = useState('');
const [ isShowNavigateButton, setShowNavigateButton ] = useState(true);

  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'ru'
  
  useEffect(() => {
      
      setLanguage(lang);
      console.log('lang из app=', lang)
    }, []);


return (
   
        <>
        <LanguageContext.Provider value = {{language, setLanguage}}>
        <VisibleLanguageModalContext.Provider value = {{isVisibleLanguageModal,setVisibleLanguageModal}}>
        <NavigationButtonContext.Provider value = {{isShowNavigateButton, setShowNavigateButton}}>
        <userLevelContext.Provider value = {{userLevel,setUserLevel}}>
        <BottomModalContext.Provider value = {{isShowBottomModal,setShowBottomModal}}>
        <TextForBottomModalContext.Provider value = {{setBottomModalText}}>
          <ScoreContext.Provider value = {{score, setScore}}>
              <Level/>
              <Yellowbg />
              <Layout />
              {!isVisibleLanguageModal && <LanguageModal /> }
              {isShowBottomModal && <BottomModal props={bottomModalText} /> }
              <Navigations />
              </ScoreContext.Provider>
        </TextForBottomModalContext.Provider>
        </BottomModalContext.Provider>
        </userLevelContext.Provider>
        </NavigationButtonContext.Provider>
        </VisibleLanguageModalContext.Provider>  
        </LanguageContext.Provider>        
        </>
   
  );

  

  
};

export default App;

