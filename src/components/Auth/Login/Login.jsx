import React from 'react';
import classNames from './Login.module.css';
import LoginMethod from './LoginMethod/LoginMethod';

const Login = () => (
  <div className={classNames.loginContent}>
    <div className={classNames.mainHeading}>
      Log in / Sign up
    </div>
    <div className={classNames.subHeading}>
      Log in / Sign up using your
    </div>
    <LoginMethod text="Google Account" type="Google" />
    <LoginMethod text="Facebook Account" type="Facebook" />
  </div>
);

export default Login;
