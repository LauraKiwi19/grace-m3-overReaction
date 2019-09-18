import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import logo from './../images/logo_awesome.svg';

const HeaderPreview = () => {
  return (
    <header class='header'>
      <Link to='/'>
        <img class='header__image' src={logo} alt='Crea tu tarjeta personal' />
      </Link>
    </header>
  );
};

export default HeaderPreview;
