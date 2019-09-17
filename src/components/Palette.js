import React from "react";

const ColorPalette = props => {

  const handlePaletteClicked = () => {
    return props.handlePalette(props.id);
    
  };

  const changeCheckedRadio = () => {
    return props.selectedPalette === props.id
    ? true : false
  }

  return (
    <div className="container" onClick={handlePaletteClicked}>
      <input
        type="radio"
        className="pallete js-palettes"
        name="palette"
        id={props.id}
        value={props.value}
        checked={changeCheckedRadio()}
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
