import React from "react";



class ColorPalette extends React.Component {
  handlePaletteClicked(props) {
    this.props.handlePalette(this.props.id)
  }
  render() {
    return (
      <div className="container" onClick={this.handlePaletteClicked}>
        <input
          type="radio"
          className="pallete js-palettes"
          name="palette"
          id={this.props.id}
          value={this.props.value}
        />
        <label htmlFor={this.props.for} className="box">
          <span className={`${this.props.number1}`}></span>
          <span className={`${this.props.number2}`}></span>
          <span className={`${this.props.number3}`}></span>
        </label>
      </div>
    );
  }
}
export default ColorPalette;
