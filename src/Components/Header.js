import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import ErrorPage from "./Pages/Error";

class Header extends Component {
  static PropTypes;

  render() {
    const { location, pages, isGlobalError } = this.props;

    return (
      <header className="header">
        <div className="header-wrapper">
          {isGlobalError ? <Redirect to="/error" /> : <Navigation />}
          <TransitionGroup className="header-content__wrapper">
            <CSSTransition
              key={location.key}
              classNames="toggle"
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
                <Route component={ErrorPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </header>
    );
  }
}

export default connect(state => ({
  isGlobalError: state.Error.isGlobalError
}))(Header);
