import React from 'react';
import classNames from './HomeBanner.module.css';

const HomeBanner = () => (
  <section className={classNames.HomeBanner}>
    <div className={classNames.bannerText}>
      <h2>Online Free Market for Clothes</h2>
      <p>Its time to recycle</p>
    </div>
  </section>
);

export default HomeBanner;
