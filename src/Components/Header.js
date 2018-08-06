import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import hidePagePreloader from "../Actions/HidePagePreloader";

import Navigation from "./Navigation";
import ErrorPage from "./Pages/Error";

class Header extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired,
    isGlobalError: PropTypes.bool.isRequired,
    headerBg: PropTypes.string,
    hidePagePreloader: PropTypes.func.isRequired
  };

  state = { showHeaderBg: false };

  bgLoaded = e => {
    this.setState({ showHeaderBg: true });
    this.props.hidePagePreloader();
    e.target.remove();
  };

  render() {
    const { location, pages, isGlobalError, headerBg } = this.props;

    return (
      <header
        className="header"
        style={
          this.state.showHeaderBg ? { backgroundImage: `url(${headerBg})` } : {}
        }
      >
        {headerBg !== undefined && (
          <img
            src={headerBg}
            alt="loader_img"
            style={{ display: "none" }}
            onLoad={this.bgLoaded}
          />
        )}
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

export default connect(
  state => ({
    isGlobalError: state.Errors.isGlobalError,
    headerBg: state.AppSettings.headerBg
  }),
  dispatch => ({
    hidePagePreloader: () => dispatch(hidePagePreloader())
  })
)(Header);
