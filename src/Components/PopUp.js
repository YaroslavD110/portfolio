import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) =>
  ReactDOM.createPortal(children, document.getElementById("root"));

const PopUp = ({ children, toggleFunc }) => (
  <Modal>
    <div className="popup-wrapper">
      <div className="popup-close">
        <button className="popup-close__btn" onClick={toggleFunc}>
          <i className="material-icons">close</i>
        </button>
      </div>
      <div className="popup-content">{children}</div>
    </div>
  </Modal>
);

export default PopUp;
