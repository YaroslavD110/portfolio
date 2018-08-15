import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Work extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    sourceCodeLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    previewSrc: PropTypes.string.isRequired
  };

  state = { isImageLoaded: false };

  _handleImageLoaded = () => this.setState({ isImageLoaded: true });

  render() {
    const { isImageLoaded } = this.state;
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
            {demoLink && (
              <Link className="item-img__cover-link" to={`/demo/${title}`}>
                <i className="material-icons">important_devices</i> Демо роботи
              </Link>
            )}
          </div>
          <img
            onLoad={this._handleImageLoaded}
            style={isImageLoaded ? { display: "block" } : { display: "none" }}
            src={previewSrc}
            alt="Work_image"
            className="item-img"
          />
          {!isImageLoaded && (
            <div className="item-loader">
              <i className="material-icons">autorenew</i>
            </div>
          )}
        </div>
      </div>
    );
  }
}
