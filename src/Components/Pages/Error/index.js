import React from "react";
import { connect } from "react-redux";

import NotFoundIcon from "../../../img/error-404.svg";
import ErrorIcon from "../../../img/error-file.svg";

const ErrorHeader = ({ isGlobalError }) => (
  <div className="header-content header-content__error">
    {isGlobalError ? (
      <img className="header-content__error-img" src={ErrorIcon} alt="Error" />
    ) : (
      <img className="header-content__error-img" src={NotFoundIcon} alt="404" />
    )}
  </div>
);

export default connect(state => ({
  isGlobalError: state.Error.isGlobalError
}))(ErrorHeader);
