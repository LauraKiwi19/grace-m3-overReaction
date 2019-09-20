import React from 'react';
import Icon from './Icon';

const SocialIcons = props => {
  return (
    <div className='card__social'>
      <div className='card__social--div'>
        <Icon
          aClass='card__social--button'
          fontAwesome='fas fa-mobile-alt'
          iconJsClass='js-icon-phone'
          iconsList={props.iconsList}
          id='phone'
        />
        <Icon
          aClass='card__social--button js-icon-link-email'
          aHref={'https://' + props.iconsList.email}
          aTarget='_blank'
          fontAwesome='fab fas fa-envelope'
          iconJsClass='js-icon-email'
          iconsList={props.iconsList}
          id='email'
        />
        <Icon
          aClass='card__social--button js-icon-link-linkedin'
          aHref={'https://linkedin.com/in/' + props.iconsList.linkedin}
          aTarget='_blank'
          fontAwesome='fab fa-linkedin-in'
          iconJsClass='js-icon-linkedin'
          iconsList={props.iconsList}
          id='linkedin'
        />
        <Icon
          aClass='card__social--button js-icon-link-github'
          aHref={'https://github.com/' + props.iconsList.github}
          aTarget='_blank'
          fontAwesome='fab  fa-github-alt'
          iconJsClass='js-icon-github'
          iconsList={props.iconsList}
          id='github'
        />
      </div>
    </div>
  );
};

export default SocialIcons;
