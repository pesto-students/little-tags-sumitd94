/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Pagination.module.css';

const Pagination = ({ totalRecords = null, currentPage = 1, pageLimit = 2, handlePageClick }) => {
  if (totalRecords === null) return null;
  const totalPages = Math.ceil(totalRecords / pageLimit);
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={classNames.pageNumbers}>
        {pageNumbers.map((page) => (
          <li
            key={page}
            id={page}
            onClick={handlePageClick}
            onKeyPress={() => {}}
            className={ page === currentPage ? classNames.activePage : ''}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.string.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Pagination;
