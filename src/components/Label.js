import React from 'react'

function Label(props) {
    return (
        <label className={props.className} htmlFor={props.htmlFor}>
            {" "}
            {props.text} {props.asterisk}
        </label>
    );
}

export default Label;