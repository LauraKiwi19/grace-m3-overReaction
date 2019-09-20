import React from "react";

const ResetButton = (props) => {
  return (
    <button
      className="js-sectiona__buton sectiona__button"
      type="button"
      id="reset"
      onClick={props.deleteData}
    >
      <p className="sectiona__button--text">
        <i className="fas fa-trash-alt">
          <span className="reset"> reset</span>
        </i>
      </p>
    </button>
  );
};

export default ResetButton;
