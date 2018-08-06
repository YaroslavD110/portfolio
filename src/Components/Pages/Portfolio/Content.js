import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import WorksList from "./Containers/WorksList";
import ControlsList from "./Containers/ControlsList";

class Portfolio extends Component {
  static propTypes = {
    works: PropTypes.array,
    categories: PropTypes.array
  };

  state = {
    filteredWorks: this.props.works || [],
    activeCategory: "all"
  };

  componentWillReceiveProps() {
    this.setState({
      filteredWorks: this.props.works
    });
  }

  showAll = () =>
    this.setState({ filteredWorks: this.props.works, activeCategory: "all" });

  filterByCategory = categoryName =>
    this.setState({
      filteredWorks: this.props.works.filter(
        work => work.category === categoryName
      ),
      activeCategory: categoryName
    });

  render() {
    const { filteredWorks, activeCategory } = this.state;
    const { categories } = this.props;

    return (
      <div className="section portfolio-section">
        <h1 className="portfolio-section__header">
          Тут представленні мої роботи
        </h1>
        <div className="portfolio-section__works-wrapper">
          <ControlsList
            categories={categories}
            activeCategory={activeCategory}
            showAll={this.showAll}
            filterByCategory={this.filterByCategory}
          />
          <WorksList works={filteredWorks} />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  works: state.WorksData.works,
  categories: state.WorksData.categories
}))(Portfolio);
