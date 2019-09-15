import React from "react";
import ColorPalette from "./Palette";
import Collapsible from "./Collapsible";

const Design = props => {
  return (
    <Collapsible sectionName="Diseña" icon="fa-object-ungroup far">
      <div>
        <div className="colors ">
          <h3 className="colors_h3">colores</h3>
          <div className="container_palettes">
            <ColorPalette
              onchange={props.onchange}
              value="1"
              id="option1"
              number1="box__color1 js-box__color1"
              number2="box__color2 js-box__color2"
              number3="box__color3 js-box__color3"
            />
            <ColorPalette
             onchange={props.onchange}
              value="2"
              id="option2"
              number1="box__color4 js-box__color4"
              number2="box__color5 js-box__color5"
              number3="box__color6 js-box__color6"
            />
            <ColorPalette
             onchange={props.onchange}
              value="3"
              id="option3"
              number1="box__color7 js-box__color7"
              number2="box__color8 js-box__color8"
              number3="box__color9 js-box__color9"
            />
          </div>
        </div>
      </div>
    </Collapsible>
  );
}
export default Design;
