/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from './Layout.module.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import Login from '../../components/Auth/Login/Login';
import { productActions } from '../../_actions';

const Layout = ({ children }) => {
  const [state, setState] = useState({ showSideDrawer: false });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const firstTime = useSelector((state) => state.authentication.firstTime);
  const allproducts = useSelector((state) => state.products.allproducts);

  useEffect(() => {
    setShowModal(firstTime);
    console.log('current pr', allproducts);
    dispatch(productActions.getAllProducts());
  }, []);

  const sideDrawerClosedHandler = () => {
    setState({ showSideDrawer: false });
  };

  const sideDrawerToggleHandler = () => {
    setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  const toggleModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="hi">
        { allproducts && allproducts.map((el) => (
          <p>{el.title}</p>
        ))}
      </div>
      <p>{JSON.stringify(allproducts)}</p>
      <ToolBar
        drawerToggleClicked={sideDrawerToggleHandler}
        toggleModalHandler={toggleModalHandler}
      />
      <SideDrawer
        open={state.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classNames.content}>
        <Modal show={showModal} modalClosed={toggleModalHandler}>
          <Login />
        </Modal>
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
