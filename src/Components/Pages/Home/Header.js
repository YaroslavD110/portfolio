import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import TypingText from "../../TypingText";

class HomeHeader extends Component {
  state = { showBtn: false };

  toggleBtn = () => {
    this.setState({ showBtn: true });
  };

  render() {
    return (
      <div className="header-content header-content__home">
        <h1>
          <TypingText onTyped={this.toggleBtn}>
            Привіт!<br /> Я Ярослав, радий, що ви завітали на мій сайт, моє CV
            можна знайти нижче :)
          </TypingText>
        </h1>
        <CSSTransition in={this.state.showBtn} timeout={500} classNames="fade">
          <div className="fade">
            <button className="btn header-content__btn">CV</button>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default HomeHeader;
