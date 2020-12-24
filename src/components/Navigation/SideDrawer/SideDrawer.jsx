/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { userActions } from '../../../_actions';

const sideDrawer = ({ open, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  const loggedInUserDetails = useSelector((state) => state.authentication);
  const { loggedIn, user } = loggedInUserDetails;
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userActions.logout());
  };

  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.brandName}>
          <FontAwesomeIcon icon={faTimes} onClick={closed} />
          <h2>Little Tags</h2>
        </div>
        {loggedIn && (
        <div className={classes.userDetails}>
          <FontAwesomeIcon icon={faUserCircle} />
          Hey,
          {' '}
          {user.displayName}
          {' '}
          !
        </div>
        )}
        <nav>
          <NavigationItems />
        </nav>
        {loggedIn && (
          <div className={classes.logoutBtn}>
            <span onClick={(e) => logout(e)}>Logout</span>
          </div>
        )}
      </div>
    </>
  );
};

export default sideDrawer;
