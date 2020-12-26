/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import classNames from './ToolBar.module.css';
import SearchBar from './SearchBar/SearchBar';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolBar = ({ drawerToggleClicked, toggleModalHandler }) => {
  const userDetails = useSelector((state) => state.authentication);
  const cart = useSelector((state) => state.cart);

  const { loggedIn, user } = userDetails;

  return (
    <header className={classNames.ToolBar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={classNames.logo}>
        <Link to="/"> Little Tags </Link>
      </div>
      <div className={classNames.SearchBar}>
        <SearchBar />
      </div>
      <div className={classNames.login}>
        { loggedIn === true ? (
          <span>
            { user.displayName }
          </span>
        ) : <span onClick={toggleModalHandler}>Login / Sign Up</span>}
      </div>
      <Link to="/cart">
        <div className={classNames.cartContainer}>
          <FontAwesomeIcon icon={faGoogle} />
          <span className={classNames.cartText}>{cart.allCarts.length}</span>
        </div>
      </Link>
    </header>
  );
};

ToolBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default ToolBar;
