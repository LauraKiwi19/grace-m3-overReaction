import React from 'react';
import logo from './../images/logo_awesome.svg'

const HeaderPreview = () => {
    return (
        <header class="header">
            <a href="index.html">
                <img class="header__image" src={logo} alt="Crea tu tarjeta personal" />
            </a>
        </header>
    )
};

export default HeaderPreview;

