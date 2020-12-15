/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = ({ clicked }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className={classes.DrawerToggle} onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
