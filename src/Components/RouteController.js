import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Content from "./Content";

export default class RouterController extends Component {
  render() {
    return (
      <main>
        <Route
          render={({ location }) => (
            <Fragment>
              <Header location={location} />
              <Content location={location} />
            </Fragment>
          )}
        />
      </main>
    );
  }
}
