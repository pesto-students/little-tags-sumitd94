import React from 'react';
import classNames from './SearchBar.module.css';

const SearchBar = () => (
  <input type="text" placeholder="Search Products" className={classNames.SearchInput} />
);

export default SearchBar;
