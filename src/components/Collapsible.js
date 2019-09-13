import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleCollapsableClick = this.handleCollapsableClick.bind(this);
  }

  handleCollapsableClick() {
    this.setState(prevState => {
      return {
        open: !prevState.open
      };
    });
  }

  render() {
    const mainClassName =
      this.state.open === false ? "js-collapsible__content" : "";

    return (
      <div className={this.props.sectionName}>
        <div
          className="container__title js-collapsible__trigger"
          onClick={this.handleCollapsableClick}
        >
          <div className="title__items">
            <div>
              <i className={`title__items__ico ${this.props.icon}`}></i>
            </div>
            <h2 className="title">{this.props.sectionName}</h2>
          </div>
          <div className="js-ico">
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
        <div className={`${mainClassName} content`}>{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsible;
