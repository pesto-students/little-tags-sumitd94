import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../../../UI/Input/Input';
import classNames from './NewAddress.module.css';
import Button from '../../../UI/Button/Button';

const NewAddress = () => {
  const { orderForm } = useSelector((state) => state.address);

  const orderClickHandler = () => {
    console.log('clicked');
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={classNames.ContactData}>
      <h4>Deliver To</h4>
      <form onSubmit={orderClickHandler}>
        {
          Object.keys(orderForm).map((formKey) => (
            <Input
              label={orderForm[formKey].label}
              key={formKey}
              elementType={orderForm[formKey].elementType}
              elementConfig={orderForm[formKey].elementConfig}
              changed={inputChangeHandler}
            />
          ))
        }
      </form>
      <Button text="Add Information" clickHandler={() => {}} />
    </div>
  );
};

export default NewAddress;
