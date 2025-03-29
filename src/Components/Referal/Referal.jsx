import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { BottomModalContext } from '../../App';
import { TextForBottomModalContext } from '../../App';
import { LanguageContext } from '../../App';
import style from './Referal.module.css';
import i from '../../img/i.png';
import imgPresent from '../../img/present.png';
import addFriend from '../../img/addfriend.png';
import { TEXTS } from './texts';
import ReferalList from './ReferalList/ReferalList';
import { useTelegram } from '../../hooks/useTelegram';



const Referal = () => {

  
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const tlgid = 777;
  const {tlgid} = useTelegram();  

  const { isShowBottomModal, setShowBottomModal } =
    useContext(BottomModalContext);
  const { setBottomModalText } = useContext(TextForBottomModalContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const { title, subtitle, greyTitle, greyRow1, greyRow2, btnText, tlgMessage, languageInteger } =
    TEXTS[language];

   

  function iBtnHandler() {
    setShowBottomModal(!isShowBottomModal);
    setBottomModalText('referal');
  }

  function btnAddFriendHandler() {
    const temptlgid = tlgid
    const templatelink = '12345678-ed1e-4477-8e19-1b8e71ab2689';
    let newId = temptlgid.toString() + 'e';
    const firstPart = newId.padEnd(8, '0').slice(0, 8); 
    const secondPart = newId.padEnd(12, '0').slice(8, 12); 
    const thirdPart = templatelink.split('-').slice(2).join('-');
    let reflink = `${firstPart}-${secondPart}-${thirdPart}`;
    reflink = reflink.slice(0, -2)
    reflink = reflink + languageInteger

    const msgtxt = tlgMessage;
    const link = `https://telegram.me/wolf_games_bot?start=${reflink}`

    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${msgtxt} ${link}`
    );
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
            <button
              className={style.btnAddFriend}
              onClick={btnAddFriendHandler}
            >
              <img src={addFriend} className={style.iconBtnAddFriend} />
              <span>{btnText}</span>
            </button>
          </div>
        </div>
      </div>

      <div><ReferalList/></div>
    </>
  );
};

export default Referal;
