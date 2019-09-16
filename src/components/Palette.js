import React from "react";

const ColorPalette = props => {
  const handlePaletteClicked = () => {
    return props.handlePalette(props.id);
  };

  return (
    <div className="container" onClick={handlePaletteClicked}>
      <input
        type="radio"
        className="pallete js-palettes"
        name="palette"
        id={props.id}
        value={props.value}
        // checked={props.isChecked}
      />
      <label htmlFor={props.for} className="box">
        <span className={`${props.number1}`}></span>
        <span className={`${props.number2}`}></span>
        <span className={`${props.number3}`}></span>
      </label>
    </div>
  );
};

export default ColorPalette;
