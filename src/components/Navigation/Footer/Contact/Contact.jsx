import React from 'react';
import classNames from './Contact.module.css';

const Contact = () => (
  <li className={classNames.ContactInfo}>
    <span className={classNames.heading}>Contact</span>
    <span className={classNames.contactDetails}>Phone: (+91) 8762346789</span>
    <span className={classNames.contactDetails}>
      Address:  1418 Riverwood Drive,
      Suite 3245 Cottonwood,
      CA 96052, United State
    </span>
  </li>
);

export default Contact;
