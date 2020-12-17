/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from './ToolBar.module.css';
import SearchBar from './SearchBar/SearchBar';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolBar = ({ drawerToggleClicked, toggleModalHandler }) => (
  <header className={classNames.ToolBar}>
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className={classNames.logo}>
      Little Tags
    </div>
    <div className={classNames.SearchBar}>
      <SearchBar />
    </div>
    <div className={classNames.login} onClick={toggleModalHandler}>
      Login / Sign Up
    </div>
  </header>
);

ToolBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default ToolBar;
