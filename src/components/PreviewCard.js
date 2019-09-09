import React from 'react';
import Icon from './Icon';

class SocialIcons extends React.Component{
  render(){
    return(
    <div className="card__social">
      <div className="card__social--div">
        <Icon aClass='card__social--button' aHref='' aTarget='_blank' fontAwesome='fas fa-mobile-alt' iconJsClass='js-icon-phone' />
        <Icon aClass='card__social--button js-icon-link-email' aHref='' aTarget='_blank' fontAwesome='fab fas fa-envelope' iconJsClass='js-icon-email' />
        <Icon aClass='card__social--button js-icon-link-linkedin' aHref='' aTarget='_blank' fontAwesome='fab fa-linkedin-in' iconJsClass='js-icon-linkedin' />
        <Icon aClass='card__social--button js-icon-link-github' aHref='' aTarget='_blank' fontAwesome='fab  fa-github-alt' iconJsClass='js-icon-github' />
      </div>
    </div>
    );
  }
}

export default SocialIcons;