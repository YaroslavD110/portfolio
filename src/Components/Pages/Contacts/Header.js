import React from "react";
import PropTypes from "prop-types";

import TypingText from "../../TypingText";

const HomeHeader = () => {
  return (
    <div className="header-content header-content__contacts">
      <div className="contacts-top">
        <h1 className="contacts-top__header">
          <TypingText>
            Привіт знову :)<br />Чекаю на ваш дзвінок/повідоммлення!
          </TypingText>
        </h1>
        <div className="contacts-top__contact-wrapper">
          <div className="contacts-top__contact">
            <div className="contacts-top__contact-icon">
              <i className="material-icons">phone</i>
            </div>
            <div className="contacts-top__contact-text">+380932199653</div>
          </div>
          <div className="contacts-top__contact">
            <div className="contacts-top__contact-icon">
              <i className="material-icons">email</i>
            </div>
            <div className="contacts-top__contact-text">
              mrtangerine69@gmail.com
            </div>
          </div>
        </div>
        <div className="contacts-top__form-wrapper">
          <form className="contacts-top__form">
            <div className="form-input__wrapper">
              <input type="text" name="name" placeholder="Введіть своє ім'я" className="form-input" />
            </div>
            <div className="form-input__wrapper">
              <input type="email" name="email" placeholder="Введіть свою пошту" className="form-input" />
            </div>
            <div className="form-textarea__wrapper">
              <textarea placeholder="Введіть ваше повідоммлення" className="form-textarea" />
            </div>
            <button className="btn form-btn">Відправити</button>
          </form>
        </div>
      </div>
    </div>
  );
};

HomeHeader.propTypes = {};

export default HomeHeader;
