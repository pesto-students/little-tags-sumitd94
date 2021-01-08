import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from './Categories.module.css';

const Categories = () => (
  <li className={classNames.Categories}>
    <span className={classNames.heading}>Categories</span>
    <span className={classNames.category}>
      <NavLink to="/products/electronics">
        Accessories
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/men-clothing">
        Shirts
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/pants">
        Pants
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/jackets">
        Jackets
      </NavLink>
    </span>
  </li>
);

export default Categories;
