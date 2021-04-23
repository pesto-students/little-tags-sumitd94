import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from './Categories.module.css';

const Categories = () => (
  <li className={classNames.Categories}>
    <span className={classNames.heading}>Categories</span>
    <span className={classNames.category}>
      <NavLink to="/products/electronics">
        Accessories (225)
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/men-clothing">
        Shirts (45)
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/jeans">
        Pants (75)
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/jackets">
        Jackets (10)
      </NavLink>
    </span>
  </li>
);

export default Categories;
