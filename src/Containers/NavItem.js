import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, path }) => (
  <li className="header-nav__item">
    <NavLink
      className="header-nav__link"
      activeClassName="header-nav__link-active"
      exact
      to={path}
    >
      {name}
    </NavLink>
  </li>
);

export default NavItem;
