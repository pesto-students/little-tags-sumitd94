import React from 'react';
import classNames from './HomeBanner.module.css';

const HomeBanner = () => (
  <>
    <div className={classNames.HomeBanner} />
    <div className={classNames.bannerContent}>
      <div className={classNames.titleContainer}>
        <div className={classNames.heading}>
          Online Flee market for clothes
        </div>
        <div className={classNames.subHeading}>
          It‘s time to recycle
        </div>
      </div>
    </div>
  </>
);

export default HomeBanner;
