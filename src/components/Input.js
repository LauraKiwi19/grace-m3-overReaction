import React from "react";

const handleChange = (props, ev) => {
  const inputValue = ev.target.value;
  const inputName = ev.target.name;
  return props.getInputValues(inputName, inputValue);
};

const Input = props => {
  return (
    <input
    onChange={handleChange.bind(null, props)}
      className={props.inputClass}
      value={props.inputValue}
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
};

export default Input;
