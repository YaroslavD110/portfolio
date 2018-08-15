import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import SubmitForm from "../../../../Actions/SubmitForm";

import PopUp from "../../../PopUp";
import Input from "../Containers/Input";

class Form extends Component {
  state = {
    isFormValid: false,
    isPopupShow: false,
    inputs: [
      {
        value: "",
        isValid: true,
        pattern: /^[а-яА-Яa-zA-Z\s]{2,}$/,
        type: "text",
        name: "name",
        placeholder: "Введіть ім'я"
      },
      {
        value: "",
        isValid: true,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        type: "email",
        name: "email",
        placeholder: "Введіть пошту"
      },
      {
        value: "",
        isValid: true,
        pattern: /.{10,}/,
        isTextarea: true,
        name: "message",
        placeholder: "Введіть повідомлення"
      }
    ]
  };

  handleSubmit = e => {
    e.preventDefault();

    this.checkInputs(() => {
      if (this.state.isFormValid) {
        this.sendMail();
      }
    });
  };

  handleInput = (value, index) => {
    this.setState(prevState => ({
      ...prevState,
      inputs: [
        ...prevState.inputs.map(
          (input, inputIndex) =>
            inputIndex !== index
              ? input
              : {
                  ...input,
                  isValid: input.pattern.test(value.trim()),
                  value: value
                }
        )
      ]
    }));
  };

  checkInputs = callback => {
    this.setState(
      prevState => ({
        ...prevState,
        inputs: [
          ...prevState.inputs.map(input => ({
            ...input,
            isValid: input.pattern.test(input.value.trim())
          }))
        ]
      }),
      () => {
        for (let input of this.state.inputs) {
          if (!input.pattern.test(input.value.trim())) {
            this.setState({ isFormValid: false }, callback);
            return;
          }
        }
        this.setState({ isFormValid: true }, callback);
      }
    );
  };

  sendMail = () =>
    this.setState({ isPopupShow: true }, () => {
      let mail = {};

      this.state.inputs.forEach(input => {
        mail[input.name] = input.value;
      });

      this.props.submitForm(mail);
    });

  togglePopup = () => this.setState({ isPopupShow: !this.state.isPopupShow });

  render() {
    const { name, message, isShowPreloader } = this.props;
    const { inputs, isPopupShow } = this.state;

    return (
      <div className="contacts-top__form-wrapper">
        <form className="contacts-top__form" onSubmit={this.handleSubmit}>
          {inputs.map((input, index) => (
            <div
              className={
                input.isTextarea
                  ? "form-textarea__wrapper"
                  : "form-input__wrapper"
              }
              key={input.name}
            >
              <Input
                handleInput={value => this.handleInput(value, index)}
                isValid={input.isValid}
                value={input.value}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                textarea={input.isTextarea}
              />
            </div>
          ))}

          <button type="submit" className="btn form-btn">
            Відправити
          </button>
        </form>

        <CSSTransition
          in={isPopupShow}
          classNames="puff"
          timeout={400}
          unmountOnExit
        >
          <PopUp toggleFunc={this.togglePopup}>
            <div className="popup-content__contacts">
              {isShowPreloader && (
                <div className="popup-content__contacts-icon">
                  <i className="material-icons">autorenew</i>
                </div>
              )}

              {!isShowPreloader && (
                <div className="popup-content__contacts-message">{`${name}, ${message}`}</div>
              )}
            </div>
          </PopUp>
        </CSSTransition>
      </div>
    );
  }
}

export default connect(
  state => ({
    name: state.Email.name,
    message: state.Email.message,
    isShowPreloader: state.Email.isShowPreloader
  }),
  dispatch => ({
    submitForm: mail => dispatch(SubmitForm(mail))
  })
)(Form);
