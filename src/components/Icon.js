import React from 'react';

class Icon extends React.Component {
  render() {
    return (
      <a className={this.props.aClass} href={this.props.aHref} target={this.props.aTarget}>
        <i className={this.props.fontAwesome + this.props.iconJsClass + "js-icon-preview"}></i>
      </a>
    );
  }

export defualt Icon;