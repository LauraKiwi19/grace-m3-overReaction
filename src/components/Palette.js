import React from "react";

const ColorPalette = props => {

  return (
      <div className="container" onClick={props.onchange}>
        <input
          type="radio"
          className="pallete js-palettes"
          name="palette"
          id={props.id}
          value={props.value}
        />
        <label htmlFor={props.for} className="box">
          <span className={`${props.number1}`}></span>
          <span className={`${props.number2}`}></span>
          <span className={`${props.number3}`}></span>
        </label>
      </div>
  );
}

export default ColorPalette;
