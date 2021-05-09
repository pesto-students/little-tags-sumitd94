/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from './ToolBar.module.css';
import SearchBar from './SearchBar/SearchBar';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolBar = ({ drawerToggleClicked, toggleModalHandler }) => {
  const userDetails = useSelector((state) => state.authentication);
  const { cartDetails } = useSelector((state) => state.cart);

  const { loggedIn, user } = userDetails;

  return (
    <nav className={classNames.navBar}>
      <div className={classNames.navSection}>
        <DrawerToggle clicked={drawerToggleClicked} />
        <div className={classNames.logo}>
          <Link to="/" className={classNames.linkNoStyle}>
            <span>
              Little Tags
            </span>
          </Link>
        </div>
        <ul className={classNames.menuItems}>
          <li className={classNames.menuItem}>
            <NavLink to="/" exact activeClassName={classNames.activeLink} className={classNames.menuLinkStyle}>
              Home
            </NavLink>
          </li>
          <li className={classNames.menuItem}>
            <NavLink to="/products/men-clothing" exact activeClassName={classNames.activeLink} className={classNames.menuLinkStyle}>
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classNames.navSection}>
        <SearchBar />
        <ul className={classNames.navIconsLists}>
          <li className={classNames.navIconsList}>
            <a href="#" className={classNames.linkNoStyle} onClick={loggedIn ? () => {} : toggleModalHandler}>
              <span className={classNames.navIcon}>
                <i className="fas fa-user" />
              </span>
              <span className={classNames.navIconText}>
                {loggedIn ? `Hi, ${user.displayName.split(' ')[0]}` : 'Login'}
              </span>
            </a>
          </li>

          <li className={classNames.navIconsList}>
            <Link to="/wishlist" className={classNames.linkNoStyle}>
              <span className={classNames.navIcon}>
                <i className="fas fa-heart" />
                <span
                  className={classNames.iconNumber}
                  style={{ display: loggedIn ? 'flex' : 'none' }}
                >
                  0
                </span>
              </span>
              <span className={classNames.navIconText}>Wishlist</span>
            </Link>
          </li>

          <li className={classNames.navIconsList}>
            <Link to="/cart" className={classNames.linkNoStyle}>
              <span className={classNames.navIcon}>
                <i className="fas fa-shopping-cart" />
                <span
                  className={classNames.iconNumber}
                  style={{ display: loggedIn ? 'flex' : 'none' }}
                >
                  {cartDetails?.length}
                </span>
              </span>
              <span className={classNames.navIconText}>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

ToolBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default ToolBar;
