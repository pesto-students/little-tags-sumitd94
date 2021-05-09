import { USER_CONSTANTS } from '../../AppConstants';
import alertActions from '../Alerts/Actions';
import History from '../Helpers/History';
import { logoutGoogle, signInWithGoogle, signInWithFacebook } from '../../utils/firebase';

const { LOGIN_SUCCESS, LOGOUT } = USER_CONSTANTS;

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
        dispatch({ type: LOGIN_SUCCESS, user: res.user });
      } else {
        History.push('/');
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
    dispatch({ type: LOGOUT });
    window.location.replace('/');
  };
}

const userActions = {
  login,
  logout,
};

export default userActions;
