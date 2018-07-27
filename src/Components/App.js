import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import RouteController from "./RouteController";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouteController />
      </BrowserRouter>
    );
  }
}

export default App;
