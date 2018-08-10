import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import NotFoundIcon from "./NotFoundIcon";
import FatalErrorIcon from "./FatalErrorIcon";

const ErrorHeader = ({ isGlobalError }) => (
  <div className="header-content header-content__error">
    <div className="header-content__error-img">
      {isGlobalError ? <FatalErrorIcon /> : <NotFoundIcon />}
    </div>
  </div>
);

ErrorHeader.propTypes = {
  isGlobalError: PropTypes.bool.isRequired
};

export default connect(state => ({
  isGlobalError: state.Errors.isGlobalError
}))(ErrorHeader);
