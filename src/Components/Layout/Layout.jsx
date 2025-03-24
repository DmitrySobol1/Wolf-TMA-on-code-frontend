import React from 'react';
import style from './Layout.module.css'
import Game from '../Game/Game'
import Referal from '../Referal/Referal'
import Exchange from '../Exchange/Exchange'
import { Routes, Route, Router } from "react-router";

const Layout = () => {

return (
<>
<div className={style.layout}>

   <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/referal" element={<Referal />} />
            <Route path="/exchange" element={<Exchange />} />
    </Routes>



</div>
</>
)

}

export default Layout;