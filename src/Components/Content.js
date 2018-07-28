import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { location, pages } = this.props;

    return (
      <section>
        <Switch location={location}>
          {pages.map(page => (
            <Route
              exact
              key={page.name}
              path={page.path}
              component={page.pageComponent}
            />
          ))}
        </Switch>
      </section>
    );
  }
}
