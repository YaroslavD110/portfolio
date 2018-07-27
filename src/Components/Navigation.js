import React, { Component } from "react";

import NavItem from "../Containers/NavItem";

import pages from "./Pages";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="header-nav">
        <ul className="header-nav__wrapper">
          {pages.map(page => (
            <NavItem key={page.name} name={page.name} path={page.path} />
          ))}
        </ul>
      </nav>
    );
  }
}
