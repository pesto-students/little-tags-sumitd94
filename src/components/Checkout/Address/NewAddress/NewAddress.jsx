import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from '../../../UI/Input/Input';
import classNames from './NewAddress.module.css';
import { addressActions } from '../../../../_actions';

const NewAddress = () => {
  const { orderForm } = useSelector((state) => state.address);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addressActions.addAddress({
      data,
    }));
  };

  return (
    <div className={classNames.ContactData}>
      <h4>Deliver To</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          Object.keys(orderForm).map((formKey) => (
            <Input
              label={orderForm[formKey].label}
              formKey={formKey}
              key={formKey}
              elementType={orderForm[formKey].elementType}
              elementConfig={orderForm[formKey].elementConfig}
              refValue={register}
            />
          ))
        }
        <input type="submit" value="Add Information" className={classNames.submitBtn} />
      </form>
    </div>
  );
};

export default NewAddress;
