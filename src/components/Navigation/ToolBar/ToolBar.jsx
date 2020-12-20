/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from './ToolBar.module.css';
import SearchBar from './SearchBar/SearchBar';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { userActions } from '../../../_actions';

const ToolBar = ({ drawerToggleClicked, toggleModalHandler }) => {
  const userDetails = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const { loggedIn, user } = userDetails;

  function logout() {
    dispatch(userActions.logout());
  }

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
            &nbsp;
            <span onClick={(e) => logout(e)}>Logout</span>
          </span>
        ) : <span onClick={toggleModalHandler}>Login / Sign Up</span>}
      </div>
    </header>
  );
};

ToolBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default ToolBar;
