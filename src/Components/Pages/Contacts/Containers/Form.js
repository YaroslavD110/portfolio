import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";

const Form = () => {
  return (
    <div className="contacts-top__form-wrapper">
      <form className="contacts-top__form">
        <Input type="text" name="name" placeholder="Введіть своє ім'я" />
        <Input type="email" name="email" placeholder="Введіть свою пошту" />
        <Input placeholder="Введіть ваше повідоммлення" textarea />

        <button className="btn form-btn">Відправити</button>
      </form>
    </div>
  );
};

Form.propTypes = {};

export default Form;
