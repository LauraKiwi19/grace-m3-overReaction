import React from "react";
import Collapsible from "./Collapsible";

const Share = props => {
  const generatedCard = props.generatedCard;
  const { link, linkDisplay, linkTitle, twitterLink } = generatedCard;

  return (
    <Collapsible sectionName="Comparte" icon="fas fa-share-alt">
      <div className="share__button">
        <button
          className="share__btn"
          style={{ background: props.shareBtnColor }}
          onClick={props.createCard}
        >
          <i className="far fa-address-card"></i>CREAR TARJETA
        </button>
      </div>
      <div className="created_card" style={{ display: linkDisplay }}>
        <h3 className="created_card_h3">{linkTitle}</h3>
        <small className="created_card_small">
          <a
            className="created_card_small"
            rel="noopener noreferrer"
            href={link}
          >
            {link}
          </a>
        </small>
        <a
          className="created_card_button js-button-twitter"
          style={{ display: linkDisplay }}
          href={'https://twitter.com/intent/tweet?text=Mira mi tarjeta de visita' + }
        >
          <i className="fab fa-twitter"></i>Compartir en Twitter
        </a>
      </div>
    </Collapsible>
  );
};

export default Share;
