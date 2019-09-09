import React from "react";

function Collapsible(props) {
  return (
    <div className="container__title js-collapsible__trigger">
      <div className="title__items">
        <div>
          <i className="title__items__ico far fa-object-ungroup far"></i>
        </div>
        <h2 className="title">Diseña</h2>
      </div>
      <div className="js-ico">
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
  );
}

export default Collapsible
