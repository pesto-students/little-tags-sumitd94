import React from 'react';
import classNames from './Footer.module.css';
import Contact from './Contact/Contact';
import Categories from './Categories/Categories';
import StayInTouch from './StayInTouch/StayInTouch';
import Copyright from './Copyright/Copyright';

const Footer = () => (
  <footer className={classNames.MainFooter}>
    <div className={classNames.FooterBlocks}>
      <nav className={classNames.leftSection}>
        <Contact />
        <Categories />
      </nav>
      <nav className={classNames.rightSection}>
        <StayInTouch />
      </nav>
    </div>
    <p className={classNames.borderLine}> </p>
    <section className={classNames.Copyright}>
      <Copyright />
    </section>
  </footer>
);

export default Footer;
