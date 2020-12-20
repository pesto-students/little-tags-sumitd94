import React from 'react';
import { Link } from 'react-router-dom';
import classNames from './OnDemand.module.css';

const OnDemand = () => (
  <>
    <div className={classNames.demandTitle}>
      Most In Demand
    </div>
    <div className={classNames.demandSections}>
      <div className={classNames.section1}>
        <div className={classNames.tshirt}>
          <Link to="/category/men-clothing">
            <p className={classNames.tagName}>T Shirt</p>
          </Link>
        </div>
        <div className={classNames.jeans}>
          <Link to="/category/jeans">
            <p className={classNames.tagName}>Jeans</p>
          </Link>
        </div>
      </div>
      <div className={classNames.section2}>
        <Link to="/category/backpack">
          <p className={classNames.tagName}>Backpack</p>
        </Link>
      </div>
      <div className={classNames.section3}>
        <Link to="/category/electronics">
          <p className={classNames.tagName}>Accessories</p>
        </Link>
      </div>
    </div>
  </>
);

export default OnDemand;
