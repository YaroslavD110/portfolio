import { TOGGLE_SECTION } from "../ActionTypes";

import Home from "../Components/Pages/Home/index";
import Portfolio from "../Components/Pages/Portfolio/index";

const initialState = {
  activeSection: {
    name: "Home",
    component: Home
  },
  sections: [
    {
      name: "Home",
      component: Home
    },
    {
      name: "Portfolio",
      component: Portfolio
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_SECTION:
      return {
        ...state,
        activeSection: payload.component
      };
    default:
      return state;
  }
};
