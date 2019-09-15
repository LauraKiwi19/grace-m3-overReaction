import React from 'react';
import '../scss/App.scss';
// import Collapsible from "./Collapsible";
import Share from './Share';
import Design from './Design';
import Form from './Form';
import PreviewCard from './PreviewCard';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      openSection: '',
      readyToCreateCard: true,
      cardShare: {
        link: 'https://awesome-profile-card.com?id=A456DF0001',
        linkDisplay: 'none',
        linkTitle: '',
        twitterLink: 'https://twitter.com/'
      },
      paletteId: 1,
      userInputs: {
					name: '',
					job: '',
					phone: '',
					email: '',
					linkedin: '',
					github: '',
			},
    };

    this.handleCreateCardClick = this.handleCreateCardClick.bind(this);
  }

  changeShareBtnColor = () => {
    return this.state.readyToCreateCard === true ? '#e17334' : 'lightgrey';
  };

  handleCreateCardClick = () => {
    return this.state.readyToCreateCard === true
      ? this.setState(() => {
          return {
            cardShare: {
              ...this.state.cardShare,
              link:
                'https://awesome-profile-card.com?id=A456DF0001/createdLink',
              linkDisplay: 'flex',
              linkTitle: 'La tarjeta ha sido creada:',
              twitterLink: 'https://twitter.com/'
            }
          };
        })
      : null;
  };
  getPaletteId = id => {
    this.setState(() => {
      const newPaletteId = id;
      return {
        paletteId: newPaletteId
      };
    });
  };
  getInputValues = (name, value) => {
    const stateAttribute = name;
    const inputValue = value;
    this.setState((prevState)=>{
      return {
        userInputs: {
					...prevState.userInputs,
					[stateAttribute]: inputValue
				}
      };
    });
  };
 
  render() {
    return (
      <div className="section__container">
        <div className="section__container__a">
          <PreviewCard userInputs={this.state.userInputs}/>
        </div>
        <div className="section__container__b">
          <form className="js-form form">
            <Design getPaletteId={this.getPaletteId} />
            <Form getInputValues={this.getInputValues}/>
            <Share
              shareBtnColor={this.changeShareBtnColor()}
              createCard={this.handleCreateCardClick}
              generatedCard={this.state.cardShare}
            />
          </form>
        </div>
      </div >
    );
  }
}

export default App;
