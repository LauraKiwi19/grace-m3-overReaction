import React from 'react'
import adalabLogo from './../images/logo-adalab.png'

const FooterPreview = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__copy">Awesome profile-cards &copy 2019</p>
                <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer" >
                    <img className="logo__adalab" src={adalabLogo} alt="Link a la página de Adalab" />
                </a>
            </div>
        </footer>
    )
}

export default FooterPreview;