import React from "react";
import PropTypes from "prop-types";

const ControlsItem = ({ activeCategory, slug, name, filterByCategory }) => {
  return (
    <button
      className={`works-controls__item ${
        activeCategory === slug ? "works-controls__item-active" : ""
      }`}
      onClick={() => filterByCategory(slug)}
    >
      {name}
    </button>
  );
};

ControlsItem.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ControlsItem;
