import React, { useState } from 'react';

import classNames from './SearchBar.module.css';

const SearchBar = () => {
  const [activeSearchIcon, setSearchIconActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div
        className={`${classNames.searchBar} ${activeSearchIcon ? classNames.activeSearchBar : ''}`}
      >
        <button
          className={classNames.searchBarBtn}
          type="submit"
        >
          <i className="fa fa-search" />
        </button>
        <input
          className={classNames.searchInput}
          type="text"
          placeholder="Type to search"
          onFocus={() => setSearchIconActive(true)}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
    </>
  );
};

export default SearchBar;
