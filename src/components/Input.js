import React from 'react'


function Input(props) {
    return (
        <input
            onChange={props.handleChange}
            className={props.inputClass}
            value={props.value}
            id={props.id}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            required={props.required}
        />
    );
}

export default Input;