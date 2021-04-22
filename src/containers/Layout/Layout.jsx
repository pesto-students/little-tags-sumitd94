/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from './Layout.module.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import Login from '../../components/Auth/Login/Login';

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const firstTime = useSelector((state) => state.authentication.firstTime);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);

  useEffect(() => {
    setShowModal(firstTime);
  }, []);

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  const toggleModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <ToolBar
        drawerToggleClicked={sideDrawerToggleHandler}
        toggleModalHandler={toggleModalHandler}
      />
      <SideDrawer
        showSideDrawer={showSideDrawer}
        sideDrawerToggle={sideDrawerToggleHandler}
        toggleModalHandler={toggleModalHandler}
      />
      <main className={classNames.content}>
        { loggedIn === false && (
          <Modal show={showModal} modalClosed={toggleModalHandler}>
            <Login />
          </Modal>
        )}
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
