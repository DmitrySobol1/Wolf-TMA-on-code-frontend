import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { BottomModalContext } from '../../App';
import { TextForBottomModalContext } from '../../App';
import { LanguageContext } from '../../App';
import style from './Referal.module.css';
import i from '../../img/i.png';
import imgPresent from '../../img/present.png';
import addFriend from '../../img/addfriend.png';
import {TEXTS} from './texts'




const Referal = () => {
  const { isShowBottomModal, setShowBottomModal } = useContext(BottomModalContext);
  const { setBottomModalText } = useContext(TextForBottomModalContext);
  const { language, setLanguage } = useContext(LanguageContext);

   const { title, subtitle, greyTitle, greyRow1, greyRow2, btnText } = TEXTS[language]
   

  function iBtnHandler() {
    setShowBottomModal(!isShowBottomModal);
    setBottomModalText('referal');
  }

  return (
    <>
      <div className={style.screenWrappeer}>
        <div className={style.container}>
          <div className={style.titleWrapper}>
            <div className={style.titleText}>{title}</div>
            <button onClick={iBtnHandler}>
              <img src={i} className={style.i} />
            </button>
          </div>

          <div className={style.subtitleText}>
            {subtitle}
          </div>

          <div className={style.greyWrapper}>
            <div>
              <img src={imgPresent} className={style.imgPresent} />
            </div>
            <div>
              <div className={style.boldText}>{greyTitle}</div>
              <div>{greyRow1}</div>
              <div>{greyRow2}</div>
            </div>
          </div>

          <div>
            <button className={style.btnAddFriend}>
              <img src={addFriend} className={style.iconBtnAddFriend}/>
              <span>{btnText}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Referal;
