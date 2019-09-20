import React from "react";
import SocialIcons from "./SocialIcons";
import ResetButton from "./Reset";

class PreviewCard extends React.Component {
  getPreview(isDefaultPicture, picture) {
    return (!isDefaultPicture) ? { backgroundImage: `url(${picture})` } : {};
}

  render() {
    return (
      <section className="sectiona__main">
        <div className="sectiona__main--container">
          <div className="main__button--container">
            <ResetButton deleteData={this.props.deleteData} />
          </div>
          <div className={"card js-palettecontainer " + this.props.selectedPalette}>
            <div className="preview__bio">
              <div className="preview__bio--rectangle "></div>
              <div className="preview__bio--div">
                <div className="js-typocontainer">
                  <h2 className="preview__bio--name js-box1_result">
                    {this.props.userInputs.name || "Nombre Apellido"}
                  </h2>
                  <h3 className="preview__bio--job js-preview__job">
                    {this.props.userInputs.job || "Front-end developer"}
                  </h3>
                </div>
              </div>
            </div>
            <div className="js-card__image card__image" alt="photo card" style={this.getPreview(this.props.isDefaultPicture, this.props.picture)}></div>
            <SocialIcons iconsList={this.props.iconsList}/>
            </div>
        </div>
      </section>
    );
  }
}

export default PreviewCard;
