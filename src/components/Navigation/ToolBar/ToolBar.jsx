import React from 'react';
import PropTypes from 'prop-types';
import classNames from './ToolBar.module.css';
import SearchBar from './SearchBar/SearchBar';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolBar = ({ drawerToggleClicked }) => (
  <header className={classNames.ToolBar}>
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className={classNames.logo}>
      Little Tags
    </div>
    <div className={classNames.SearchBar}>
      <SearchBar />
    </div>
  </header>
);

ToolBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default ToolBar;
