import React from "react";
import Collapsible from "./Collapsible";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    debugger;
    const text = event.target.value;

    this.setState({
      content: `${text}`
    });
  }
  render() {
    const asterisk = <span className="asterisk">*</span>;
    return (
      <div className="fillin">
        <Collapsible sectionName="Rellena" icon="fas fa-share-alt" />
        <div className="name">
          <Label htmlFor="name" text="Nombre Completo" asterisk={asterisk} />
          <Input
            onChange={this.onChange}
            inputClass="item__input"
            id="name"
            type="text"
            name="name"
            placeholder="Ej: Sally Jill"
            required="required"
          />
          <p>{this.state.value}</p>
        </div>
        <div className="job">
          <Label htmlFor="job" text="Puesto" asterisk={asterisk} />
          <Input
            inputClass="item__input js-input-job"
            id="job"
            type="text"
            name="name"
            placeholder="Ej: Front-end unicorn"
            required="required"
          />
        </div>
        <div className="photo">
          <Label htmlFor="photo" text="Imagen de Perfil" asterisk={asterisk} />
          <div className="photo__container">
            <Input
              inputClass="js-form__photo form__photo"
              id="files"
              type="file"
              name="photo"
              required="required"
            />
            <Label
              className="image__btn"
              htmlFor="files"
              text="Añadir imagen"
            />
            <img className="js-preview js-photo preview" alt='imagen'/>
          </div>
        </div>
        <div className="email">
          <Label htmlFor="email" text="Email" asterisk={asterisk} />
          <Input
            inputClass="item__input js-input-email"
            id="email"
            type="email"
            name="email"
            placeholder="Ej: sally-hill@gmail.com"
            required="required"
          />
        </div>
        <div className="phone">
          <Label htmlFor="phone" text="Teléfono" />
          <Input
            inputClass="item__input js-input-phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 555-55-55-55"
          />
        </div>
      </div>
    );
  }
}

class Label extends React.Component {
  render() {
    return (
      <label className="form__item" htmlFor={this.props.htmlFor}>
        {" "}
        {this.props.text} {this.props.asterisk}
      </label>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <input
        onChange={this.handleChange}
        className={this.props.inputClass}
        value={this.props.value}
        id={this.props.id}
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        required={this.props.required}
      />
    );
  }
}

export default Form;
