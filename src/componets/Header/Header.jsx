import { NavLink } from "react-router-dom";
import CSS from "./Header.module.css";
const Header = () => {
  return (
    <div className={CSS.headerContainer}>
      <ul className={CSS.navigation}>
        <li className={CSS.headerItem}>
          <NavLink className="nav-link " to="/">
            Home
          </NavLink>
        </li>
        <li className={CSS.headerItem}>
          <NavLink className="nav-link " to="/rental">
            Rental
          </NavLink>
        </li>
        <li className={CSS.headerItem}>
          <NavLink className="nav-link " to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
