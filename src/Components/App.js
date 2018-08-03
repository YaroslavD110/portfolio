import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-particles-js";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";

import { InitApp } from "../Actions/InitApp";

import RouteController from "./RouteController";

class App extends Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    const particlesParams = {
      particles: {
        number: {
          value: 90
        },
        color: {
          value: "#f3e5f5"
        },
        shape: {
          type: "polygon"
        },
        size: {
          value: 1.3
        }
      }
    };

    return (
      <Scrollbars
        className="scrollbar"
        autoHide
        style={{ width: "100%", height: "100vh" }}
      >
        <Particles className="particle-wrapper" params={particlesParams} />
        <BrowserRouter>
          <RouteController />
        </BrowserRouter>
      </Scrollbars>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    initApp: () => dispatch(InitApp())
  })
)(App);
