import React from "react";
import Collapsible from "./Collapsible";

const Share = props => {
  return (
    <div className="share">
      <Collapsible />
      <div className="js-collapsible__content content">
        <div className="share__button">
          <button className="share__btn">
            <i className="far fa-address-card"></i>CREAR TARJETA
          </button>
        </div>
        <div className="created_card">
          <h3 className="created_card_h3"></h3>
          <small className="created_card_small">
            https://awesome-profile-card.com?id=A456DF0001
          </small>
          <a className="created_card_button js-button-twitter">
            {" "}
            <i className="fab fa-twitter"></i> Compartir en Twitter{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Share;
