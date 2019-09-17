import React from "react";

const Input = props => {
  const handleChange = ev => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    return props.getInputValues(inputName, inputValue);
  };
  return (
    <input
      onChange={handleChange}
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
