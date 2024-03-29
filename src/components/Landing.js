import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/pages/_landing.scss';
import Logo from '../images/logo_awesome.svg';


class Landing extends React.Component {
  render() {
    return (
      <div className='landing_main'>
        <div className='landing_content'>
          <img
            src={Logo}
            alt='Bienvendido a Awesome profile cards'
            className='logo_awesome'
          />
          <section className='landing_section'>
            <h1 className='landing_title'>Crea tu tarjeta de visita</h1>
            <h2 className='landing_subtitle'>
              Crea mejores contactos profesionales de forma fácil y cómoda
            </h2>
            <div className='landing_icons_container'>
              <div className='icon_box'>
                <i className='far fa-object-ungroup'></i>
                <small className='icon_text'>Diseña</small>
              </div>
              <div className='icon_box'>
                <i className='far fa-keyboard'></i>
                <small className='icon_text'>Rellena</small>
              </div>
              <div className='icon_box'>
                <i className='fas fa-share-alt'></i>
                <small className='icon_text'>Comparte</small>
              </div>
            </div>
          </section>
          <Link to='/card'>
            <button className='landing_button'>COMENZAR</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
