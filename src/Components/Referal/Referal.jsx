import React from 'react'
import { useState, useEffect, useContext } from 'react';

import { BottomModalContext } from '../../App';
import { TextForBottomModalContext } from '../../App';
import style from './Referal.module.css'
import i from '../../img/i.png';

const Referal = () => {
   const { isShowBottomModal, setShowBottomModal } = useContext(BottomModalContext);
   const { setBottomModalText } = useContext(TextForBottomModalContext);
  
    function iBtnHandler(){
      setShowBottomModal(!isShowBottomModal)
      setBottomModalText('referal')
    }
  

return (
    <>
<div>Пригласить друзей</div>
<button onClick={iBtnHandler}><img src={i} className={style.i} /></button>
</>
)
}


export default Referal