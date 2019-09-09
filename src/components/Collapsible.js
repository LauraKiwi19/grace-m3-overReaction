import React from "react";

function Collapsible(props) {
  // const onClick = e => {
  //   props.collapsible
  // }
  /* eslint-disable strict */
  const collapsibleTriggers = document.querySelectorAll(
    ".js-collapsible__trigger"
  );

  function updateCollapsible(event) {
    const currentCollapsible = event.currentTarget.parentElement;

    if (currentCollapsible.classList.contains("js-collapsible--open")) {
      currentCollapsible.classList.remove("js-collapsible--open");
    } else {
      for (const item of collapsibleTriggers) {
        item.parentElement.classList.remove("js-collapsible--open");
      }
      currentCollapsible.classList.add("js-collapsible--open");
    }
  }

  // for (const item of collapsibleTriggers) {
  //   item.addEventListener("click", updateCollapsible);
  // }
  return (
    <div className="container__title js-collapsible__trigger" onClick={updateCollapsible}>
      <div className="title__items">
        <div>
          <i className="title__items__ico far fa-object-ungroup far"></i>
        </div>
        <h2 className="title">{props.sectionName}</h2>
      </div>
      <div className="js-ico">
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
  );
}

export default Collapsible;
