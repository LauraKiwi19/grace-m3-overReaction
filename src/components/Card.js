import React from 'react';
// import { Route, Switch, Link } from "react-router-dom";

import "../scss/App.scss";
import Share from "./Share";
import Design from "./Design";
import Form from "./Form";
import PreviewCard from "./PreviewCard";
import defaultPicture from "./../images/default.jpg";
import HeaderPreview from "./HeaderPreview";
import sendRequest from "../data/dataFromServer";
// import Loading from "./Loading"
import "../scss/components/_buttons.scss"
import "../scss/core/_variables.scss"

class Card extends React.Component {
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
    const localData = JSON.parse(localStorage.getItem('userData')) || {};
    return {
      openSection: '',
      readyToCreateCard: true,
      cardShare: {
        link: '',
        linkDisplay: 'none',
        linkTitle: '',
        twitterLink: ''
      },

      palette: localData.palette || 1,
      userInputs: {
        name: localData.name || '',
        job: localData.job || '',
        phone: localData.phone || '',
        email: localData.email || '',
        linkedin: localData.linkedin || '',
        github: localData.github || ''
      },

      isDefaultPicture: true,
      photo: localData.photo || defaultPicture
    };
  }

  updateProfilePicture = img => {
    this.setState(() => {
      return {
        photo: img,
        isDefaultPicture: false
      };
    });
  };

  isReadyToCreateCard = () => {
    const { name, job, email, linkedin, github } = this.state.userInputs;
    const { photo, palette } = this.state;

    const readyToCreateCard = !!(
      name &&
      job &&
      email &&
      linkedin &&
      github &&
      photo &&
      palette
    );
    if (readyToCreateCard !== this.state.readyToCreateCard) {
      this.setState({ readyToCreateCard: readyToCreateCard });
    }
  };

  changeShareBtnColor = () => {
    return this.state.readyToCreateCard === true ? '#e17334' : 'lightgrey';
  };

  componentDidUpdate(props, state) {
    this.isReadyToCreateCard()
  }

  handleCreateCardClick = e => {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem('userData'));
    sendRequest(localData).then(data => {
      return this.state.readyToCreateCard === true
        ? this.setState(() => {
          return {
            cardShare: {
              ...this.state.cardShare,
              link: data,
              linkDisplay: 'flex',
              linkTitle: 'La tarjeta ha sido creada:',
              twitterLink: `https://twitter.com/intent/tweet?text=Mira mi tarjeta de visita ${data}`
            }
          };
        })
        : null;
    });
  };

  handlePaletteClick = event => {
    this.paletteInput.checked = true;
  };

  handleButtonReset() {
    console.log('reset');
    localStorage.removeItem('userData');
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

  setLocalStorage = () => {
    const { email, github, job, linkedin, name, phone } = this.state.userInputs;
    const palette = this.state.palette;
    const photo = this.state.photo;
    const userData = {
      email: email,
      github: github,
      job: job,
      linkedin: linkedin,
      name: name,
      palette: palette,
      phone: phone,
      photo: photo
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  render() {
    this.setLocalStorage()

    const changeSelectedPalette = () => {
      return 'palette' + this.state.palette;
    };

    this.setLocalStorage();

    return (
      <div className='app'>
        <HeaderPreview />
        <div className='section__container'>
          <div className='section__container__a'>
            <PreviewCard
              name={this.state.userInputs.name}
              job={this.state.userInputs.job}
              iconsList={this.state.userInputs}
              userInputs={this.state.userInputs}
              selectedPalette={changeSelectedPalette()}
              picture={this.state.photo}
              deleteData={this.handleButtonReset}
            />
          </div>
          <div className='section__container__b'>
            <form className='js-form form'>
              <Design
                getPaletteId={this.getPaletteId}
                onchange={this.handlePaletteClick}
                selectedPalette={this.state.palette}
              />
              <Form
                stateValueInputs={this.state.userInputs}
                getInputValues={this.getInputValues}
                // isDefaultPicture={this.state.isDefaultPicture}
                picture={this.state.photo}
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
      </div>
    );
  }
}

export default Card;
