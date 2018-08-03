import React, { Component } from "react";

import img from "../../../img/vetclinic_template.jpg";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="section portfolio-section">
        <h1 className="portfolio-section__header">
          Тут представленні мої роботи
        </h1>
        <div className="portfolio-section__works-wrapper">
          <div className="works-controls">
            <button className="works-controls__item">Всі</button>
            <button className="works-controls__item">Верстка</button>
            <button className="works-controls__item">Js проекти</button>
          </div>
          <div className="works-list">
            <div className="works-list__item">
              <div className="item-header">
                <span />
                <span />
                <span />
              </div>
              <div className="item-img__wrapper">
                <img src={img} alt="Work_image" className="item-img" />
              </div>
            </div>

            <div className="works-list__item">
              <div className="item-header">
                <span />
                <span />
                <span />
              </div>
              <div className="item-img__wrapper">
                <img src={img} alt="Work_image" className="item-img" />
              </div>
            </div>

            <div className="works-list__item">
              <div className="item-header">
                <span />
                <span />
                <span />
              </div>
              <div className="item-img__wrapper">
                <img src={img} alt="Work_image" className="item-img" />
              </div>
            </div>

            <div className="works-list__item">
              <div className="item-header">
                <span />
                <span />
                <span />
              </div>
              <div className="item-img__wrapper">
                <img src={img} alt="Work_image" className="item-img" />
              </div>
            </div>

            <div className="works-list__item">
              <div className="item-header">
                <span />
                <span />
                <span />
              </div>
              <div className="item-img__wrapper">
                <img src={img} alt="Work_image" className="item-img" />
              </div>
            </div>

            <div className="works-list__item">
              <div className="item-header">
                <span />
                <span />
                <span />
              </div>
              <div className="item-img__wrapper">
                <img src={img} alt="Work_image" className="item-img" />
              </div>
            </div>

            <div className="works-list__item">
              <div className="item-header">
                <span />
                <span />
                <span />
              </div>
              <div className="item-img__wrapper">
                <img src={img} alt="Work_image" className="item-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
