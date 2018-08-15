import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { showPreloader, hidePreloader } from "../../../Actions/PagePreloader";

export class DemoPage extends Component {
  static propTypes = {
    showPreloader: PropTypes.func.isRequired,
    hidePreloader: PropTypes.func.isRequired,
    isGlobalError: PropTypes.bool.isRequired,
    works: PropTypes.array
  };

  state = { demoSrc: null, noMatch: false };

  componentWillMount() {
    this.props.showPreloader();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.works && newProps.cvs) {
      let currentDemo = [
        ...Object.keys(newProps.cvs).map(key => ({
          title: key,
          demoLink: newProps.cvs[key]
        })),
        ...newProps.works
      ].filter(demo => demo.title === this.props.match.params.demoName);

      if (currentDemo.length === 1) {
        this.setState({ demoSrc: currentDemo[0].demoLink });
      } else {
        this.setState({ noMatch: true });
      }
    }
  }

  _handleFrameLoaded = () => {
    this.props.hidePreloader();
  };

  render() {
    const { isGlobalError } = this.props;
    const { demoSrc, noMatch } = this.state;

    if (isGlobalError) return null;

    return (
      <div className="demo-wrapper">
        {noMatch && <Redirect to="/error" />}

        <div className="demo-btn__wrapper">
          <a href="/portfolio" className="demo-btn">
            <i className="material-icons">arrow_back</i>
          </a>
        </div>

        {demoSrc && (
          <iframe
            onLoad={this._handleFrameLoaded}
            className="demo-frame"
            title="Work demo"
            src={demoSrc}
          />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    isGlobalError: state.Errors.isGlobalError,
    works: state.WorksData.works,
    cvs: state.AppSettings.cvs
  }),
  { showPreloader, hidePreloader }
)(DemoPage);
