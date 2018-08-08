import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Work extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    sourceCodeLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    previewSrc: PropTypes.string.isRequired
  };

  render() {
    const { title, sourceCodeLink, demoLink, previewSrc } = this.props;

    return (
      <div className="works-list__item">
        <div className="item-header">
          <span />
          <span />
          <span />
          <h4 className="item-header__text">{title}</h4>
        </div>
        <div className="item-img__wrapper">
          <div className="item-img__cover">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="item-img__cover-link"
              href={sourceCodeLink}
            >
              <i className="material-icons">code</i> Код роботи
            </a>
            {demoLink !== undefined && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="item-img__cover-link"
                href={demoLink}
              >
                <i className="material-icons">important_devices</i> Демо роботи
              </a>
            )}
          </div>
          <img src={previewSrc} alt="Work_image" className="item-img" />
        </div>
      </div>
    );
  }
}
