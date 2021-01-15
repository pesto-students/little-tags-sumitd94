import { userConstants } from '../_constants';
import alertActions from './alert.actions';
import { history } from '../_helpers';
import { logoutGoogle, signInWithGoogle, signInWithFacebook } from '../_services';

function login(type) {
  return async (dispatch) => {
    try {
      let res = '';
      if (type === 'google') {
        res = await signInWithGoogle();
      } else {
        res = await signInWithFacebook();
      }
      if (res) {
        dispatch(alertActions.success('Login Success'));
        dispatch({ type: userConstants.LOGIN_SUCCESS, user: res.user });
      } else {
        history.push('/');
      }
    } catch (err) {
      dispatch(alertActions.error(err.toString()));
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

const userActions = {
  login,
  logout,
};

export default userActions;
