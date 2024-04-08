import { NavLink } from 'react-router-dom';
import CSS from './Header.module.css';
import sprite from '../../assets/images/sprite.svg';
const Header = () => {
  return (
    <div className={CSS.headerContainer}>
      <svg className={CSS.iconList}>
        <use href={sprite + '#icon-camp3'} />
      </svg>
      <ul className={CSS.navigation}>
        <li className={CSS.headerItem}>
          <NavLink className={CSS.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={CSS.headerItem}>
          <NavLink className={CSS.navLink} to="/rental">
            Rental
          </NavLink>
        </li>
        <li className={CSS.headerItem}>
          <NavLink className={CSS.navLink} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
