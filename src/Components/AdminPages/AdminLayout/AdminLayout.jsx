import React, { useContext, useState, useEffect } from 'react';
// import { NavigationButtonContext } from '../../App';
// import { useTelegram } from '../../hooks/useTelegram';
import { Routes, Route } from 'react-router';

import UserList from '../UserList/UserList';

import style from './AdminLayout.module.css';

const AdminLayout = () => {
  
  return (
    <>
      
          <div className={style.layout}>
            <Routes>
              {/* <Route path="/" element={<Game />} />
              <Route path="/referal" element={<Referal />} />
              <Route path="/exchange" element={<Exchange />} /> */}
              <Route path="/userlist" element={<UserList />} />
            </Routes>
          </div>
        
     
    </>
  );
};

export default AdminLayout;
