import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Navigation from "./Navigation";

import pages from "./Pages";

export default class Header extends Component {
  render() {
    const { location } = this.props;

    return (
      <header className="header">
        <Navigation />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="slide-transition"
            timeout={1000}
          >
            <Switch location={location}>
              {pages.map(page => (
                <Route
                  exact
                  key={page.name}
                  path={page.path}
                  component={page.headerComponent}
                />
              ))}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </header>
    );
  }
}
