import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import PopUp from "../../PopUp.js";

class HomeHeader extends Component {
  state = {
    isPopupShow: false
  };

  togglePopup = () => this.setState({ isPopupShow: !this.state.isPopupShow });

  render() {
    const { isPopupShow } = this.state;
    const { cvs } = this.props;

    return (
      <div className="header-content header-content__home">
        <h2 className="header-content__home-subheading">Привіт!</h2>
        <h1 className="header-content__home-heading">
          Я Ярослав, <span className="accent-text">Web-developer</span>
        </h1>
        <button
          onClick={this.togglePopup}
          className="btn header-content__home-btn"
        >
          CV
        </button>
        <CSSTransition
          in={isPopupShow}
          classNames="puff"
          timeout={400}
          unmountOnExit
        >
          <PopUp toggleFunc={this.togglePopup}>
            <div className="popup-content__cv">
              <h2 className="popup-content__cv-header">
                Виберіть мову резюме:
              </h2>
              {cvs && (
                <div className="popup-content__cv-links">
                  {cvs.ua && (
                    <a href={cvs.ua} className="popup-content__cv-link">
                      Українська
                    </a>
                  )}
                  {cvs.ru && (
                    <a href={cvs.ru} className="popup-content__cv-link">
                      Російська
                    </a>
                  )}
                  {cvs.en && (
                    <a href={cvs.en} className="popup-content__cv-link">
                      Англійська
                    </a>
                  )}
                </div>
              )}
            </div>
          </PopUp>
        </CSSTransition>
      </div>
    );
  }
}

export default connect(state => ({
  cvs: state.AppSettings.cvs
}))(HomeHeader);
