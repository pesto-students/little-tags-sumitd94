import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import classNames from './Address.module.css';
import Button from '../../components/UI/Button/Button';

const Address = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.authentication.address);

  useEffect(() => {
    console.log('address', address);
    dispatch(userActions.addAddress({
      city: 'Delhi',
    }));
  }, []);

  return (
    <div className={classNames.addressLists}>
      <h2>Deliver To</h2>
      <ul>
        <li>
          <input type="radio" name="deliveryAddress" />
          <div className={classNames.address}>
            <span>Sumit Dhanania</span>
            <span>
              1418 Riverwood Drive,
              Suite 3245 Cottonwood,
              DL 110092, India
            </span>
          </div>
        </li>
        <li>
          <input type="radio" name="deliveryAddress" />
          <div className={classNames.address}>
            <span>Manohar Kumar</span>
            <span>
              1418 Riverwood Drive,
              Suite 3245 Cottonwood,
              DL 110092, India
            </span>
          </div>
        </li>
      </ul>
      <div className={classNames.newAddress}>
        <span>+</span>
        <p>Add New Address</p>
      </div>
      <Button text="Proceed" clickHandler={() => {}} />
    </div>
  );
};

export default Address;
