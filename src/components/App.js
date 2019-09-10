import React from "react";
import '../scss/App.scss';
// import Collapsible from "./Collapsible";
import Share from "./Share";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      openSection: "",
      readyToCreateCard: false,
      cardShare: {
        link: "https://awesome-profile-card.com?id=A456DF0001",
        linkDisplay: "none",
        linkTitle: "",
        twitterLink: "https://twitter.com/"
      }
    };

    this.handleCreateCardClick = this.handleCreateCardClick.bind(this);
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

  render() {
    return (
      <div className="App">
                
        <Share
          shareBtnColor={this.changeShareBtnColor()}
          createCard={this.handleCreateCardClick}
          generatedCard={this.state.cardShare}
        />
              
      </div>
    );
  }
}

export default App;
