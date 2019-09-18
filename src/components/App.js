import React from "react";
import "../scss/App.scss";
import Share from "./Share";
import Design from "./Design";
import Form from "./Form";
import PreviewCard from "./PreviewCard";
import defaultPicture from "./../images/default.jpg";
import HeaderPreview from "./HeaderPreview";
import FooterPreview from "./FooterPreview";
import Landing from "./Landing";
import sendRequest from "../data/sendData";


class App extends React.Component {
  constructor() {
    super();

    this.state = this.getInitialState();

    this.updateProfilePicture = this.updateProfilePicture.bind(this);
    this.handleCreateCardClick = this.handleCreateCardClick.bind(this);
    this.handleButtonReset = this.handleButtonReset.bind(this);
    this.getPaletteId = this.getPaletteId.bind(this);
    this.getInputValues = this.getInputValues.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  getInitialState() {
    return {
      openSection: "",
      readyToCreateCard: true,
      cardShare: {
        link: "https://awesome-profile-card.com?id=A456DF0001",
        linkDisplay: "none",
        linkTitle: "",
        twitterLink: "https://twitter.com/"
      },

      palette: 1,
      userInputs: {
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: ""
      },

      isDefaultPicture: true,
      picture: defaultPicture
    };
  }

  updateProfilePicture = img => {
    this.setState(() => {
      return {
        picture: img,
        isDefaultPicture: false
      };
    });
  };

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
    const clickedPalette = this.paletteInput.current;
    this.paletteInput.checked = true;
  };

  handleButtonReset() {
    this.setState(this.getInitialState());
  }

  //functions for getting and saving user's inputs into state

  getPaletteId = id => {
    this.setState(() => {
      const newPaletteId = id;
      return {
        palette: newPaletteId
      };
    });
  };

  getInputValues = (name, value) => {
    const stateAttribute = name;
    const inputValue = value;
    this.setState(prevState => {
      return {
        userInputs: {
          ...prevState.userInputs,
          [stateAttribute]: inputValue
        }
      };
    });
  };

  //save data in LocalStorage

  setLocalStorage = props => {
    const { email, github, job, linkedin, name, phone } = props.userInputs;
    const palette = props.palette;
    const isDefaultPicture = props.isDefaultPicture;
    const picture = props.picture;
    const userData = {
      email: email,
      github: github,
      job: job,
      linkedin: linkedin,
      name: name,
      palette: palette,
      phone: phone,
      isDefaultPicture: isDefaultPicture,
      picture: picture
    };

    localStorage.setItem("userData", JSON.stringify(userData));
  };

  render() {
    const changeSelectedPalette = () => {
      return "palette" + this.state.palette;
    };

    this.setLocalStorage(this.state);

    return (
      <div className="app">
        <Landing />
        <div className="section__container">
          <div className="section__container__a">
            <PreviewCard
              name={this.state.userInputs.name}
              job={this.state.userInputs.job}
              iconsList={this.state.userInputs}
              userInputs={this.state.userInputs}
              selectedPalette={changeSelectedPalette()}
              deleteData={this.handleButtonReset}
              picture={this.state.picture}
              isDefaultPicture={this.state.isDefaultPicture}
            />
          </div>
          <div className="section__container__b">
            <form className="js-form form">
              <Design
                getPaletteId={this.getPaletteId}
                onchange={this.handlePaletteClick}
                selectedPalette={this.state.palette}
              />
              <Form
                stateValueInputs={this.state.userInputs}
                getInputValues={this.getInputValues}
                isDefaultPicture={this.state.isDefaultPicture}
                picture={this.state.picture}
                updateProfilePicture={this.updateProfilePicture}
              />
              <Share
                shareBtnColor={this.changeShareBtnColor()}
                createCard={this.handleCreateCardClick}
                generatedCard={this.state.cardShare}
              />
            </form>
          </div>
        </div>
        <FooterPreview />
      </div>
    );
  }
}

export default App;
