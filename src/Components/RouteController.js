import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import DemoPage from "./Pages/Demo";
import Header from "./Header";
import Content from "./Content";

import pages from "./Pages";

export default class RouterController extends Component {
  render() {
    return (
      <main>
        <Route
          render={({ location }) => (
            <Fragment>
              <Route path="/demo" Component={DemoPage} exact />

              <Header location={location} pages={pages} />
              <Content location={location} pages={pages} />
            </Fragment>
          )}
        />
      </main>
    );
  }
}
