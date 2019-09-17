import React from "react";

const Icon = props => {
  const { phone, email, likedin, github } = props.iconsList;

  // console.log(props.iconsList);
  // console.log(props.iconsList);
  let opacity = "0.5";

  const iconOpacity = () => {
    for (let icon in props.iconsList) {
      if (props.id === icon.toString()) {
        if (props.iconsList[icon] !== "") {
          console.log(props.iconsList[icon]);
          opacity = "1";
        } else {
          opacity = "0.5";
        }
      }
    }
  };

  iconOpacity();

  return (
    <a className={props.aClass} href={props.aHref} target={props.aTarget}>
      <i
        className={
          props.fontAwesome + " " + props.iconJsClass + " js-icon-preview"
        }
        style={{ opacity: opacity }}
        id={props.id}
      ></i>
    </a>
  );
};

export default Icon;
