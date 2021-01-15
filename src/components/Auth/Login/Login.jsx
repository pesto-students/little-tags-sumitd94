import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from './Login.module.css';
import LoginMethod from './LoginMethod/LoginMethod';
import userActions from '../../../_actions/user.actions';

const Login = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);

  console.log(loggedIn);

  function handleSubmit(type) {
    dispatch(userActions.login(type));
  }

  return (
    <div className={classNames.loginContent}>
      <div className={classNames.mainHeading}>
        Log in / Sign up
      </div>
      <div className={classNames.subHeading}>
        Log in / Sign up using your
      </div>
      <LoginMethod text="Google Account" type="Google" click={() => handleSubmit('google')} />
      <LoginMethod text="Facebook Account" type="Facebook" click={() => handleSubmit('facebook')} />
    </div>
  );
};

export default Login;
