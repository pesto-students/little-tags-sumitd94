import React from 'react';
import classNames from './Categories.module.css';

const Categories = () => (
  <li className={classNames.Categories}>
    <span className={classNames.heading}>Categories</span>
    <span className={classNames.category}>Accessories</span>
    <span className={classNames.category}>Jeans</span>
    <span className={classNames.category}>Tops</span>
    <span className={classNames.category}>Jackets</span>
  </li>
);

export default Categories;
