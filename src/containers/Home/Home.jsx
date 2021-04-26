import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import OnDemand from './OnDemand/OnDemand';

import classNames from './Home.module.css';

const Home = () => (
  <div className={classNames.homeContainer}>
    <HomeBanner />
    <OnDemand />
  </div>
);

export default Home;
