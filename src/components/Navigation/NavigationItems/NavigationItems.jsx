import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from './NavigationItems.module.css';

const NavigationItems = () => {
  const loggedInUserDetails = useSelector((state) => state.authentication);
  const { loggedIn } = loggedInUserDetails;

  return (
    <div className={classNames.NavigationItems}>
      <h2>Categories</h2>
      <ul className={classNames.NavigationItemsList}>
        <li>
          <NavLink to="/products/electronics">
            Accessories
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/men-clothing">
            Shirts
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/pants">
            Pants
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/jackets">
            Jackets
          </NavLink>
        </li>
      </ul>
      {loggedIn && (
      <>
        <p> </p>
        <ul className={classNames.NavigationItemsList}>
          <li>
            <NavLink to="/past-orders">
              Past Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-address">
              Add Address
            </NavLink>
          </li>
        </ul>
      </>
      )}
    </div>
  );
};

export default NavigationItems;
