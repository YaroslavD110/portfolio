import React from "react";
import PropTypes from "prop-types";

const Contacts = ({ phone, email }) => {
  return (
    <div className="contacts-top__contact-wrapper">
      <div className="contacts-top__contact">
        <div className="contacts-top__contact-icon">
          <i className="material-icons">phone</i>
        </div>
        <div className="contacts-top__contact-text">{phone}</div>
      </div>
      <div className="contacts-top__contact">
        <div className="contacts-top__contact-icon">
          <i className="material-icons">email</i>
        </div>
        <div className="contacts-top__contact-text">{email}</div>
      </div>
    </div>
  );
};

Contacts.defaultProps = {
  phone: "",
  email: ""
};

Contacts.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string
};

export default Contacts;
