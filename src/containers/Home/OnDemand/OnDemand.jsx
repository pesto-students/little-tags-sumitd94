/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from './OnDemand.module.css';

const OnDemand = (props) => {
  const redirectHandler = (category) => {
    props.history.push(`/products/${category}`);
  };

  return (
    <>
      <div className={classNames.demandTitle}>
        Most In Demand
      </div>
      <div className={classNames.demandSections}>
        <div className={classNames.section1}>
          <div className={classNames.tshirt} onClick={() => redirectHandler('men-clothing')}>
            <p className={classNames.tagName}>T Shirt</p>
          </div>
          <div className={classNames.jeans} onClick={() => redirectHandler('women-clothing')}>
            <p className={classNames.tagName}>Jeans</p>
          </div>
        </div>
        <div className={classNames.section2} onClick={() => redirectHandler('backpack')}>
          <p className={classNames.tagName}>Backpack</p>
        </div>
        <div className={classNames.section3} onClick={() => redirectHandler('electronics')}>
          <p className={classNames.tagName}>Accessories</p>
        </div>
      </div>

    </>
  );
};

export default withRouter(OnDemand);
