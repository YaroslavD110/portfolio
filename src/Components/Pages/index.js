import HomeHeader from "./Home/Header";
import Portfolio from "./Portfolio";
import PortfolioHeader from "./Portfolio/Header";
import ContactsHeader from "./Contacts/Header";

export default [
  {
    name: "Головна",
    path: "/",
    pageComponent: null,
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
    headerComponent: ContactsHeader
  }
];
