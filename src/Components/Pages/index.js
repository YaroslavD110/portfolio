import Home from "./Home";
import HomeHeader from "./Home/Header";
import Portfolio from "./Portfolio";
import PortfolioHeader from "./Portfolio/Header";

export default [
  {
    name: "Головна",
    path: "/",
    pageComponent: Home,
    headerComponent: HomeHeader
  },
  {
    name: "Портфоліо",
    path: "/portfolio",
    pageComponent: Portfolio,
    headerComponent: PortfolioHeader
  },
  {
    name: "Контакти",
    path: "/contacts",
    pageComponent: null,
    headerComponent: null
  }
];
