import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Input = ({
  textarea,
  isValid,
  handleInput,
  value,
  placeholder,
  name,
  type
}) => (
  <Fragment>
    {textarea ? (
      <textarea
        className={
          !isValid ? "form-textarea form-textarea__invalid" : "form-textarea"
        }
        value={value}
        onInput={e => handleInput(e.target.value)}
        placeholder={placeholder}
      />
    ) : (
      <input
        className={!isValid ? "form-input form-input__invalid" : "form-input"}
        value={value}
        onInput={e => handleInput(e.target.value)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    )}
  </Fragment>
);

Input.defaultProps = {
  textarea: false,
  isValid: true
};

Input.propTypes = {
  textarea: PropTypes.bool,
  value: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Input;
