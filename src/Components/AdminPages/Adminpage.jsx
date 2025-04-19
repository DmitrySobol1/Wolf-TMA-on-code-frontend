import React, { useContext, useState, useEffect } from 'react';
import { NavigationButtonContext } from '../../App';
import { useTelegram } from '../../hooks/useTelegram';
import { Routes, Route } from 'react-router';

import AdminLayout from './AdminLayout/AdminLayout';

// import style from './Adminpage.module.css';

const Adminpage = () => {
  const { isShowNavigateButton, setShowNavigateButton } = useContext(
    NavigationButtonContext
  );
  const [isAdminAuthorised, setAdminAuthorised] = useState(false);
  const { tlgid } = useTelegram();

  useEffect(() => {
    // Скрыть кнопку один раз при монтировании
    setShowNavigateButton(false);
  }, [setShowNavigateButton]);

  useEffect(() => {
    const admins = process.env.REACT_APP_ADMIN_LIST;
    const adminsArray = admins?.split(',').map((id) => Number(id.trim()));

    if (adminsArray?.includes(Number(tlgid))) {
      console.log('Admin matched:', tlgid);
      setAdminAuthorised(true);
    }
  }, [tlgid]);

  return (
    <>
      {isAdminAuthorised ? <AdminLayout /> : <>restricted</>}
    </>
  );
};

export default Adminpage;
