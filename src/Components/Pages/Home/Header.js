import React, { Component } from "react";
import PropTypes from "prop-types";

import TypingText from "../../TypingText";

class HomeHeader extends Component {
  static propTypes = {};

  state = { showBtn: false };

  render() {
    return (
      <div className="header-content header-content__home">
        <h1>
          <TypingText onTyped={() => this.setState({ showBtn: true })}>
            Привіт!<br /> Я Ярослав, радий, що ви завітали на мій сайт, моє CV
            можна знайти нижче :)
          </TypingText>
        </h1>
        {this.state.showBtn && <button className="btn">CV</button>}
      </div>
    );
  }
}

export default HomeHeader;
