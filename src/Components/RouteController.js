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
        <Route exact path="/demo/:demoName" component={DemoPage} />
        <Route
          render={({ location }) => (
            <Fragment>
              <Header location={location} pages={pages} />
              <Content location={location} pages={pages} />
            </Fragment>
          )}
        />
      </main>
    );
  }
}
