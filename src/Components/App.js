import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-particles-js";

import RouteController from "./RouteController";

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
