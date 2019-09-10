import React from 'react';


const Icon = props => {

  return (
    <a className={props.aClass} href={props.aHref} target={props.aTarget}>
      <i className={props.fontAwesome + " " + props.iconJsClass + " js-icon-preview"}></i>
    </a>
  );
}

export default Icon;