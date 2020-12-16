import React from 'react';
import classNames from './OnDemand.module.css';

const OnDemand = () => (
  <>
    <div className={classNames.demandTitle}>
      Most In Demand
    </div>
    <div className={classNames.demandSections}>
      <div className={classNames.section1}>
        <div className={classNames.tshirt}>
          <p className={classNames.tagName}>T Shirt</p>
        </div>
        <div className={classNames.jeans}>
          <p className={classNames.tagName}>Jeans</p>
        </div>
      </div>
      <div className={classNames.section2}>
        <p className={classNames.tagName}>Backpack</p>
      </div>
      <div className={classNames.section3}>
        <p className={classNames.tagName}>Accessories</p>
      </div>
    </div>

  </>
);

export default OnDemand;
