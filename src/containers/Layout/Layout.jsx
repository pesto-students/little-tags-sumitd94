import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from './Layout.module.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';

const Layout = ({ children }) => {
  const [state, setState] = useState({ showSideDrawer: false });

  const sideDrawerClosedHandler = () => {
    setState({ showSideDrawer: false });
  };

  const sideDrawerToggleHandler = () => {
    setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  return (
    <>
      <ToolBar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        open={state.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classNames.content}>
        {children}
      </main>
      <Footer />
    </>

  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
