/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from 'react';

import classNames from './SearchBar.module.css';

const SearchBar = () => {
  const [activeSearchIcon, setSearchIconActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchBarRef = useRef(null);
  const closeSearchBar = (e) => {
    if (!searchBarRef.current.contains(e.target)) {
      setSearchIconActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', closeSearchBar);

    return () => {
      document.removeEventListener('click', closeSearchBar);
    };
  }, []);

  return (
    <>
      <div
        className={`${classNames.searchBar} ${activeSearchIcon ? classNames.activeSearchBar : ''}`}
        ref={searchBarRef}
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
