import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing_main'>
        <div className='landing_content'>
          <img
            src='./assets/images/logo_awesome.svg'
            alt='Bienvendido a Awesome profile cards'
            class='logo_awesome'
          />
          <section className='landing_section'>
            <h1 className='landing_title'>Crea tu tarjeta de visita</h1>
            <h2 className='landing_subtitle'>
              Crea mejores contactos profesionales de forma fácil y cómoda
            </h2>
            <div className='landing_icons_container'>
              <i clasName='far fa-object-ungroup'></i>
              <i clasName='far fa-keyboard'></i>
              <i className='far fas fa-share-alt'></i>
            </div>
          </section>
          <button className='landing_button'>COMENZAR</button>
        </div>
      </div>
    );
  }
}

export default Landing;
