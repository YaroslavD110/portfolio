import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Navigation from "./Navigation";

export default class Header extends Component {
  render() {
    const { location, pages } = this.props;

    return (
      <header className="header">
        <div className="header-wrapper">
          <Navigation />
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="slide"
              timeout={1000}
              onExit={() => console.log(location)}
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
        </div>
      </header>
    );
  }
}
