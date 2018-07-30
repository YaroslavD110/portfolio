import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-particles-js";
import { Scrollbars } from 'react-custom-scrollbars';

import RouteController from "./RouteController";

class App extends Component {
  render() {
    return (
      <Scrollbars autoHide style={{ width: "100%", height: "100vh" }}>
        <Particles
          className="particle-wrapper"
          params={{
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
            },
            interactivity: {
              onhover: {
                enable: true,
                mode: "grab"
              }
            }
          }}
        />
        <BrowserRouter>
          <RouteController />
        </BrowserRouter>
      </Scrollbars>
    );
  }
}

export default App;
