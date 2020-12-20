import { userConstants } from '../_constants';
import alertActions from './alert.actions';
import { history } from '../_helpers';
import { userService } from '../_services';

function login(username, password) {
  return (dispatch) => userService.login(username, password)
    .then(
      (user) => {
        dispatch(alertActions.success('Logged In'));
        dispatch({ type: userConstants.LOGIN_SUCCESS, user });
      },
      (error) => {
        history.push('/');
        dispatch({ type: userConstants.LOGIN_SUCCESS, error });
      },
    );
}

const userActions = {
  login,
};

export default userActions;
