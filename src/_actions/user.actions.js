import { userConstants } from '../_constants';
import alertActions from './alert.actions';
import { history } from '../_helpers';
import { signInWithGoogle } from '../_services';

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
        dispatch(alertActions.error(err));
      }
    }
  };
}

const userActions = {
  login,
};

export default userActions;
