import { userConstants } from '../_constants';
import alertActions from './alert.actions';
import { history } from '../_helpers';
import { logoutGoogle, signInWithGoogle } from '../_services';

function login(type) {
  return async (dispatch) => {
    if (type === 'google') {
      try {
        const res = await signInWithGoogle();
        if (res) {
          dispatch(alertActions.success('Login Success'));
          dispatch({ type: userConstants.LOGIN_SUCCESS, user: res.user });
        } else {
          history.push('/');
        }
      } catch (err) {
        dispatch(alertActions.error(err.toString()));
      }
    }
  };
}

function logout() {
  return (dispatch) => {
    console.log('logoutclick');
    logoutGoogle();
    dispatch(alertActions.success('Successfully Logout'));
    dispatch({ type: userConstants.LOGOUT });
    window.location.replace('/');
  };
}

function addAddress(addressObject) {
  return (dispatch) => {
    dispatch({ type: userConstants.ADDADDRESS, address: addressObject });
  };
}

const userActions = {
  login,
  logout,
  addAddress,
};

export default userActions;
