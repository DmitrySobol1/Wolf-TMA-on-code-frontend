import React from 'react';
import style from './BottomModal.module.css';

import { LanguageContext } from '../../App';
import { BottomModalContext } from '../../App';
import { useContext, useEffect } from 'react';
import { TEXTS } from './texts';

const BottomModal = (props) => {
  const { isShowBottomModal, setShowBottomModal } =
    useContext(BottomModalContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const { title, text } = TEXTS[props.props]?.[language];

  function closeBtnHandler() {
    setShowBottomModal(!isShowBottomModal);
  }

  console.log(props);

  useEffect(() => {
    console.log('Компонент смонтирован для', props);

    // return () => {
    //   console.log('Компонент будет размонтирован');
    // };
  }, []); // Пустой массив = нет зависимостей

  // return (
  //   <div className={style.modal}>
  //     <button onClick={closeBtnHandler}>
  //       <span className={style.closeBtn}>&times;</span>
  //     </button>
  //     <div className={style.title}>{title}</div>
  //     <div>{text}</div>
  //   </div>
  // );

  return (
    <div
      className={`${style.modal} ${
        isShowBottomModal ? style.modalVisible : ''
      }`}
    >
      <button onClick={closeBtnHandler}>
        <span className={style.closeBtn}>&times;</span>
      </button>
      <div className={style.title}>{title}</div>
      <div>{text}</div>
    </div>
  );
};

export default BottomModal;
