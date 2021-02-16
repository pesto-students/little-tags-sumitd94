import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import classNames from './OnDemand.module.css';

const OnDemand = () => (
  <>
    <div className={classNames.demandTitle}>
      Most In Demand
    </div>
    <div className={classNames.demandSections}>
      <div className={classNames.leftSection}>
        <NavLink to="/products/men-clothing">
          <div className={classNames.categoryCard}>
            <div className={[classNames.horizontalCard, classNames.tShirt].join(' ')} />
            <div className={classNames.cardFooter}>
              T Shirt
            </div>
          </div>
        </NavLink>
        <NavLink to="/products/women-clothing">
          <div className={classNames.categoryCard}>
            <div className={[classNames.horizontalCard, classNames.jeans].join(' ')} />
            <div className={classNames.cardFooter}>
              Jeans
            </div>
          </div>
        </NavLink>
      </div>
      <div className={classNames.rightSection}>
        <NavLink to="/products/backpack">
          <div className={classNames.categoryCard}>
            <div className={[classNames.verticalCard, classNames.backpack].join(' ')} />
            <div className={classNames.cardFooter}>
              Backpack
            </div>
          </div>
        </NavLink>
        <NavLink to="/products/electronics">
          <div className={classNames.categoryCard}>
            <div className={[classNames.verticalCard, classNames.accessories].join(' ')} />
            <div className={classNames.cardFooter}>
              Accessories
            </div>
          </div>
        </NavLink>
      </div>
    </div>

  </>
);

export default withRouter(OnDemand);
