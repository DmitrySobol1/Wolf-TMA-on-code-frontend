import React from 'react';
import { NavLink } from 'react-router';

const Navigations = () => {
  return (
    <nav>
     
      {/* <NavLink to="/game">Игра</NavLink> */}
      <NavLink to="/">Игра</NavLink>
      <NavLink to="/referal">Рефералы</NavLink>
      <NavLink to="/exchange">Обмен</NavLink>


    </nav>
  );
};

export default Navigations;
