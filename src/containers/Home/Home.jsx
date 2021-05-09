import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeBanner from './HomeBanner/HomeBanner';
import OnDemand from './OnDemand/OnDemand';

import { fetchProducts } from '../../store/Products/Actions';

import classNames from './Home.module.css';

const Home = () => {
  const storeState = useSelector((state) => state);
  console.log(storeState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={classNames.homeContainer}>
      <HomeBanner />
      <OnDemand />
    </div>
  );
};

export default Home;
