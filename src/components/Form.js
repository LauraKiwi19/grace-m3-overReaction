import React from 'react';
import Collapsible from './Collapsible';
import Label from './Label'
import Input from './Input'
import GetAvatar from './GetAvatar'

function Form(props) {
  const asterisk = <span className="asterisk">*</span>;
  return (
    <Collapsible sectionName="Rellena" icon="far fa-keyboard">
      <div className="fillin">
        <div className="name">
          <Label className="form__item" htmlFor="name" text="Nombre Completo" asterisk={asterisk} />
          <Input inputClass="item__input" id="name" type="text" name="name" placeholder="Ej: Sally Jill" required="required" />
        </div>
        <div className="job">
          <Label className="form__item" htmlFor="job" text="Puesto" asterisk={asterisk} />
          <Input inputClass="item__input js-input-job" id="job" type="text" name="name" placeholder="Ej: Front-end unicorn" required="required" />
        </div>
        <div className="photo">
          <Label className="form__item" htmlFor="photo" text="Imagen de Perfil" asterisk={asterisk} />
          <GetAvatar isDefaultPicture={props.isDefaultPicture} picture={props.picture} updateProfilePicture={props.updateProfilePicture} />
        </div>
        <div className="email">
          <Label className="form__item" htmlFor="email" text="Email" asterisk={asterisk} />
          <Input inputClass="item__input js-input-email" id="email" type="email" name="email" placeholder="Ej: sally-hill@gmail.com" required="required" />
        </div>
        <div className="phone">
          <Label className="form__item" htmlFor="phone" text="Teléfono" />
          <Input inputClass="item__input js-input-phone" type="tel" id="phone" name="phone" placeholder="Ej: 555-55-55-55" />
        </div>
        <div className="linkedin">
          <Label className="form__item" htmlFor="linkedin" text="Linkedin" asterisk={asterisk} />
          <Input inputClass="item__input js-input-linkedin" type="text" id="linkedin" name="linkedin" placeholder="Ej: linkedin.com/in/sally.hill" />
        </div>
        <div className="github">
          <Label className="form__item" htmlFor="github" text="Github" asterisk={asterisk} />
          <Input inputClass="item__input js-input-github" type="text" id="github" name="github" placeholder="Ej: @sally-hill" />
        </div>
      </div>
    </Collapsible>)
}

export default Form;

