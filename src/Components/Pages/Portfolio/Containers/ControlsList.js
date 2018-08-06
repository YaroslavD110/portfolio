import React from "react";
import PropTypes from "prop-types";

import ControlsItem from "./ControlsItem";

const ControlsList = ({
  categories,
  activeCategory,
  showAll,
  filterByCategory
}) => (
  <div className="works-controls">
    <button
      onClick={showAll}
      className={`works-controls__item ${
        activeCategory === "all" ? "works-controls__item-active" : ""
      }`}
    >
      Всі
    </button>
    {categories !== [] &&
      categories !== undefined &&
      categories.map(category => (
        <ControlsItem
          key={category.term_id}
          slug={category.slug}
          name={category.name}
          activeCategory={activeCategory}
          filterByCategory={filterByCategory}
        />
      ))}
  </div>
);

ControlsList.defaultProps = {
  categories: [],
  activeCategory: "all"
};

ControlsList.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  showAll: PropTypes.func.isRequired,
  filterByCategory: PropTypes.func.isRequired
};

export default ControlsList;
