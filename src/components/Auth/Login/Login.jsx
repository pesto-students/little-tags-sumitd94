import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from './Login.module.css';
import LoginMethod from './LoginMethod/LoginMethod';
import userActions from '../../../_actions/user.actions';
import { signInWithGoogle } from '../../../services/firebase';

const Login = () => {
  const [inputs] = useState({
    username: 'test',
    password: 'test',
  });

  const { username, password } = inputs;
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);

  console.log(loggedIn);

  function handleSubmit(e) {
    console.log('handlesubmit');
    e.preventDefault();
    dispatch(userActions.login(username, password));
  }

  return (
    <div className={classNames.loginContent}>
      <div className={classNames.mainHeading}>
        Log in / Sign up
      </div>
      <div className={classNames.subHeading}>
        Log in / Sign up using your
      </div>
      <button onClick={(e) => handleSubmit(e)} type="button">Check</button>
      <LoginMethod text="Google Account" type="Google" click={signInWithGoogle} />
      <LoginMethod text="Facebook Account" type="Facebook" click={() => {}} />
    </div>
  );
};

export default Login;
