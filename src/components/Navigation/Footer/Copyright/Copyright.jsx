import React from 'react';
import classNames from './Copyright.module.css';

const Copyright = () => (
  <div className={classNames.Copyright}>
    <span className={classNames.website}>
      @2020 Little Tags website
    </span>
    <span className={classNames.rights}>
      All Rights Reserved
    </span>
  </div>
);

export default Copyright;
