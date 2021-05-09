import React from 'react';
import classNames from './StayInTouch.module.css';

const StayInTouch = () => (
  <li className={classNames.StayInTouch}>
    <span className={classNames.heading}>Lets Stay In Touch</span>
    <div className={classNames.subscribeForm}>
      <input type="text" placeholder="your email address" />
      <button type="button">Subscribe</button>
    </div>
    <span className={classNames.text}>
      Keep up to date with our latest
      news and special offers.
    </span>
  </li>
);

export default StayInTouch;
