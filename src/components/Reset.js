import React from 'react';

class ResetButton extends React.Component {
  render() {
    return (
      <button
        className='js-sectiona__buton sectiona__button'
        type='button'
        id='reset'
      >
        <p className='sectiona__button--text'>
          <i className='far fa-trash-alt'>
            <span className='reset'> reset</span>
          </i>
        </p>
      </button>
    );
  }
}

export default ResetButton;
