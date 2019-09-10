import React from 'react';
import SocialIcons from './SocialIcons';


class PreviewCard extends React.Component{
  render(){
    return(
      <section class="sectiona__main">
        <div class="sectiona__main--container">
          <div class="main__button--container">
            <button class="js-sectiona__buton sectiona__button">
              
              {/* <p class="sectiona__button--text">
                <i class="fas fa-mobile-alt"><span class="reset"> reset</span></i>
              </p> */}
            </button>
          </div>
          <div class="card js-palettecontainer">
            <div class="preview__bio">
              <div class="preview__bio--rectangle "></div>
              <div class="preview__bio--div">
                <div class="js-typocontainer">
                  <h2 class="preview__bio--name js-box1_result">Nombre Apellido</h2>
                  <h3 class="preview__bio--job js-preview__job">Front-end developer</h3>
                </div>
              </div>
            </div>

            <div class="js-card__image card__image" alt="photo card"></div>
            <SocialIcons />
            </div>
        </div>
      </section>
    );
  }
}

export default PreviewCard;

