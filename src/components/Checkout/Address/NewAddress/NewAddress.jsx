import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from '../../../UI/Input/Input';
import classNames from './NewAddress.module.css';
import { addressActions } from '../../../../_actions';

const NewAddress = ({ history }) => {
  const { orderForm } = useSelector((state) => state.address);
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addressActions.addAddress({
      data,
    }));
    history.replace('/checkout');
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
              refValue={register(orderForm[formKey].validation)}
              required={orderForm[formKey].validation.required}
              validationErrors={errors}
            />
          ))
        }
        <input type="submit" value="Add Information" className={classNames.submitBtn} />
      </form>
    </div>
  );
};

NewAddress.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

export default NewAddress;
