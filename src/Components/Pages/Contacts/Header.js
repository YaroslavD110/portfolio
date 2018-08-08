import React from "react";
import { connect } from "react-redux";

import Contacts from "./Containers/Contacts";
import Form from "./Containers/Form";
import TypingText from "../../TypingText";

const HomeHeader = ({ phone, email }) => {
  return (
    <div className="header-content header-content__contacts">
      <div className="contacts-top">
        <h1 className="contacts-top__header">
          <TypingText>
            Привіт знову :)<br />Чекаю на ваш дзвінок/повідоммлення!
          </TypingText>
        </h1>
        <Contacts phone={phone} email={email} />
        <Form />
      </div>
    </div>
  );
};

export default connect(state => ({
  phone: state.AppSettings.contactPhone,
  email: state.AppSettings.contactEmail
}))(HomeHeader);
