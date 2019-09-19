import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../images/logo_awesome.svg';

const HeaderPreview = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__image' src={logo} alt='Crea tu tarjeta personal' />
      </Link>
    </header>
  );
};

export default HeaderPreview;
