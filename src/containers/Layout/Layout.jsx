import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Layout.module.css';

const Layout = ({ children }) => (
  <>
    <main className={classNames.content}>
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
