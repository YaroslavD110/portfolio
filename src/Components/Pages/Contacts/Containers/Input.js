import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  static propTypes = {
    textarea: PropTypes.bool
  };

  render() {
    const { textarea } = this.props;

    return (
      <div
        className={textarea ? "form-textarea__wrapper" : "form-input__wrapper"}
      >
        {textarea ? (
          <textarea className="form-textarea" {...this.props} />
        ) : (
          <input className="form-input" {...this.props} />
        )}
      </div>
    );
  }
}

export default Input;
