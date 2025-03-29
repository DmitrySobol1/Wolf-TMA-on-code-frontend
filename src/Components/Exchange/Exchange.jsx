import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { BottomModalContext } from '../../App';
import { TextForBottomModalContext } from '../../App';
import { LanguageContext } from '../../App';

import style from './Exchange.module.css';
import i from '../../img/i.png';
import iconsexchange from '../../img/iconsexchange.png';
import imgFriend from '../../img/friend.png';

import { useTelegram } from '../../hooks/useTelegram';

import { TEXTS } from './texts';



const Exchange = () => {
  const { isShowBottomModal, setShowBottomModal } =
    useContext(BottomModalContext);
  const { setBottomModalText } = useContext(TextForBottomModalContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const { title, subtitle, greyTitle, greyRow, redTitle, redRow } =
    TEXTS[language];

   // const tlgid = 777;
    const {tlgid} = useTelegram();  

  function iBtnHandler() {
    setShowBottomModal(!isShowBottomModal);
    setBottomModalText('change');
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

          <div className={style.subtitleText}>{subtitle}</div>

          <div className={style.greyWrapper}>
            <div className={style.imgDiv}>
              <img src={iconsexchange} className={style.imgPresent} />
            </div>
            <div>
              <div className={style.boldText}>{greyTitle}</div>
              <div>{greyRow}</div>
            </div>
          </div>

          <div className={style.redWrapper}>
            <div className={style.imgDiv}>
              <img src={imgFriend} className={style.imgPresent} />
            </div>
            <div>
              <div className={style.boldText}>{redTitle}</div>
              <div>{redRow}</div>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
