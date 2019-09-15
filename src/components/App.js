import React from "react";
import "../scss/App.scss";
// import Collapsible from "./Collapsible";
import Share from "./Share";
import Design from "./Design";
import Form from "./Form";
import PreviewCard from "./PreviewCard";
import Landing from "./Landing";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      github: "",
      job: "",
      linkedin: "",
      name: "",
      palette: 1,
      phone: "",
      photo: "",
      typogra: 0,
      
      openSection: "",
      readyToCreateCard: true,
      cardShare: {
        link: "https://awesome-profile-card.com?id=A456DF0001",
        linkDisplay: "none",
        linkTitle: "",
        twitterLink: "https://twitter.com/"
      }
    };

    this.handleCreateCardClick = this.handleCreateCardClick.bind(this);
    this.handlePaletteClick = this.handlePaletteClick.bind(this);
  }

  changeShareBtnColor = () => {
    return this.state.readyToCreateCard === true ? "#e17334" : "lightgrey";
  };

  handleCreateCardClick = () => {
    return this.state.readyToCreateCard === true
      ? this.setState(() => {
          return {
            cardShare: {
              ...this.state.cardShare,
              link:
                "https://awesome-profile-card.com?id=A456DF0001/createdLink",
              linkDisplay: "flex",
              linkTitle: "La tarjeta ha sido creada:",
              twitterLink: "https://twitter.com/"
            }
          };
        })
      : null;
  };

  handlePaletteClick = event => {
    const clickedPalette = event.currentTarget.firstElementChild.value;
    this.setState({ palette: clickedPalette });
    event.currentTarget.firstElementChild.checked = true;
  };

  render() {
    const {
      email,
      github,
      job,
      linkedin,
      name,
      palette,
      phone,
      photo,
      typogra
    } = this.state;

    const userData = {
      email: email,
      github: github,
      job: job,
      linkedin: linkedin,
      name: name,
      palette: palette,
      phone: phone,
      photo: photo,
      typogra: typogra
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    const changeSelectedPalette = palette => {
      return "palette" + palette;
    };

    return (
      <div className="section__container">
        <div className="section__container__a">
          <Landing />
          <PreviewCard
            selectedPalette={changeSelectedPalette(palette)}
          />
        </div>
        <div className="section__container__b">
          <form className="js-form form">
            <Design onchange={this.handlePaletteClick} />
            <Form />
            <Share
              shareBtnColor={this.changeShareBtnColor()}
              createCard={this.handleCreateCardClick}
              generatedCard={this.state.cardShare}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
