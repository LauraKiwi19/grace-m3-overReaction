import React from "react";
import Collapsible from "./Collapsible";
import Label from "./Label";
import Input from "./Input";
import GetAvatar from "./GetAvatar";
import "../scss/layout/_fillin.scss";
import PropTypes from "prop-types";

function Form(props) {
  const asterisk = <span className="asterisk">*</span>;
  return (
    <Collapsible sectionName="Rellena" icon="far fa-keyboard">
      <div className="fillin">
        <div className="name">
          <Label
            className="form__item"
            htmlFor="name"
            text="Nombre Completo"
            asterisk={asterisk}
          />
          <Input
            inputClass="item__input"
            id="name"
            type="text"
            name="name"
            placeholder="Ej: Sally Jill"
            required="required"
            getInputValues={props.getInputValues}
            inputValue={props.stateValueInputs.name}
          />
        </div>
        <div className="job">
          <Label
            className="form__item"
            htmlFor="job"
            text="Puesto"
            asterisk={asterisk}
          />
          <Input
            inputClass="item__input js-input-job"
            id="job"
            type="text"
            name="job"
            placeholder="Ej: Front-end unicorn"
            required="required"
            getInputValues={props.getInputValues}
            inputValue={props.stateValueInputs.job}
          />
        </div>
        <div className="photo">
          <Label
            className="form__item"
            htmlFor="photo"
            name="photo"
            text="Imagen de Perfil"
            asterisk={asterisk}
          />
          <GetAvatar
            isDefaultPicture={props.isDefaultPicture}
            picture={props.picture}
            updateProfilePicture={props.updateProfilePicture}
          />
        </div>
        <div className="email">
          <Label
            className="form__item"
            htmlFor="email"
            text="Email"
            asterisk={asterisk}
          />
          <Input
            inputClass="item__input js-input-email"
            id="email"
            type="email"
            name="email"
            placeholder="Ej: sally-hill@gmail.com"
            required="required"
            getInputValues={props.getInputValues}
            inputValue={props.stateValueInputs.email}
          />
        </div>
        <div className="phone">
          <Label className="form__item" htmlFor="phone" text="Teléfono" />
          <Input
            inputClass="item__input js-input-phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 555-55-55-55"
            getInputValues={props.getInputValues}
            inputValue={props.stateValueInputs.phone}
          />
        </div>
        <div className="linkedin">
          <Label
            className="form__item"
            htmlFor="linkedin"
            text="Linkedin"
            asterisk={asterisk}
          />
          <Input
            inputClass="item__input js-input-linkedin"
            type="text"
            id="linkedin"
            name="linkedin"
            placeholder="Ej: linkedin.com/in/sally.hill"
            getInputValues={props.getInputValues}
            inputValue={props.stateValueInputs.linkedin}
          />
        </div>
        <div className="github">
          <Label
            className="form__item"
            htmlFor="github"
            text="Github"
            asterisk={asterisk}
          />
          <Input
            inputClass="item__input js-input-github"
            type="text"
            id="github"
            name="github"
            placeholder="Ej: @sally-hill"
            getInputValues={props.getInputValues}
            inputValue={props.stateValueInputs.github}
          />
        </div>
      </div>
    </Collapsible>
  );
}
Form.propTypes = {
  stateValueInputs: PropTypes.shape({
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // phone: PropTypes.number.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
  })
};
export default Form;
