import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from './NavigationItems.module.css';

const NavigationItems = ({ sideDrawerToggle }) => {
  const loggedInUserDetails = useSelector((state) => state.authentication);
  const { loggedIn } = loggedInUserDetails;

  return (
    <div
      className={classNames.NavigationItems}
      onClick={sideDrawerToggle}
      role="button"
      onKeyDown={sideDrawerToggle}
      tabIndex={0}
    >
      <h2>Categories</h2>
      <ul className={classNames.NavigationItemsList}>
        <li>
          <NavLink to="/products/accessories">Accessories</NavLink>
        </li>
        <li>
          <NavLink to="/products/men-clothing">T Shirt</NavLink>
        </li>
        <li>
          <NavLink to="/products/jeans">Jeans</NavLink>
        </li>
        <li>
          <NavLink to="/products/backpacks">Backpacks</NavLink>
        </li>
      </ul>
      {loggedIn && (
        <>
          <p> </p>
          <ul className={classNames.NavigationItemsList}>
            <li>
              <NavLink to="/past-orders">Past Orders</NavLink>
            </li>
            <li>
              <NavLink to="/new-address">Add Address</NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

NavigationItems.propTypes = {
  sideDrawerToggle: PropTypes.func.isRequired,
};

export default NavigationItems;
