import React from 'react'
import adalabLogo from './../images/logo-adalab.png'

const FooterPreview = () => {
    return (
        <footer class="footer">
            <div class="footer__container">
                <p class="footer__copy">Awesome profile-cards &copy 2019</p>
                <a href="https://adalab.es/" target="_blank">
                    <img class="logo__adalab" src={adalabLogo} alt="Link a la página de Adalab" />
                </a>
            </div>
        </footer>
    )
}

export default FooterPreview;