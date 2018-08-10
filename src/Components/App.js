import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-particles-js";
import { Scrollbars } from "react-custom-scrollbars";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import { GetWorksData, GetPageSettings } from "../Actions/InitApp";

import RouteController from "./RouteController";
import PagePreloader from "../Containers/PagePreloader";

class App extends Component {
  componentDidMount() {
    this.props.getWorksData();
    this.props.getPageSettings();
  }

  render() {
    const particlesParams = {
      particles: {
        number: {
          value: window.innerWidth > 560 ? 80 : 30
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
        <CSSTransition
          in={this.props.showPagePreloader}
          classNames="fadeOut"
          timeout={500}
          unmountOnExit
        >
          <PagePreloader />
        </CSSTransition>
        <Particles className="particle-wrapper" params={particlesParams} />
        <BrowserRouter>
          <RouteController />
        </BrowserRouter>
      </Scrollbars>
    );
  }
}

export default connect(
  state => ({
    showPagePreloader: state.Preloader.showPagePreloader
  }),
  dispatch => ({
    getWorksData: () => dispatch(GetWorksData()),
    getPageSettings: () => dispatch(GetPageSettings())
  })
)(App);
