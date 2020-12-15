import React from 'react';
import classNames from './NavigationItems.module.css';

const NavigationItems = () => (
  <div className={classNames.NavigationItems}>
    <h2>Categories</h2>
    <ul className={classNames.NavigationItemsList}>
      <li>Accessories</li>
      <li>Shirts</li>
      <li>Pants</li>
      <li>Jackets</li>
    </ul>
    <p> </p>
    <ul className={classNames.NavigationItemsList}>
      <li>Past Orders</li>
      <li>Add Address</li>
    </ul>
  </div>
);

export default NavigationItems;
