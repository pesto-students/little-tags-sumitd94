import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from './Categories.module.css';

const Categories = () => (
  <li className={classNames.Categories}>
    <span className={classNames.heading}>Categories</span>
    <span className={classNames.category}>
      <NavLink to="/products/accessories">
        Accessories (225)
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/men-clothing">
        T Shirt (45)
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/jeans">
        Jeans (75)
      </NavLink>
    </span>
    <span className={classNames.category}>
      <NavLink to="/products/backpacks">
        Backpacks (10)
      </NavLink>
    </span>
  </li>
);

export default Categories;
