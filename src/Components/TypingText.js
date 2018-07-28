import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export class TypingText extends Component {
  static defaultProps = {
    time: 100,
    onTyped: () => {}
  };

  static propTypes = {
    time: PropTypes.number,
    onTyped: PropTypes.func
  };

  state = {
    element: [],
    counter: 1
  };

  componentDidMount() {
    const { time, onTyped, children } = this.props;

    let element = [];
    let index = 0;

    let timer = setInterval(() => {
      if (typeof children[index] === "string") {
        element[index] = children[index].slice(0, this.state.counter);

        this.setState(
          { element: element.slice(), counter: this.state.counter + 1 },
          () => {
            if (children[index].length + 1 === this.state.counter) index++;
          }
        );
      } else {
        this.setState({ counter: 1 }, () => {
          element[index] = children[index];
          index++;
        });
      }

      if (children[index] === undefined) {
        clearInterval(timer);
        onTyped();
      }
    }, time);
  }

  render() {
    return (
      <Fragment>
        {this.state.element}
        <span style={{ animation: "blinking 0.7s infinite" }}>|</span>
      </Fragment>
    );
  }
}

export default TypingText;
