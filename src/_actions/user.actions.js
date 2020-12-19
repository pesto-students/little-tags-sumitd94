import { userConstants } from '../_constants';

const userService = {
  login: () => new Promise((resolve) => resolve(true)),
};

function login(username, password) {
  return (dispatch) => {
    console.log('hi');
    return userService.login(username, password)
      .then(
        (user) => {
          console.log('hi');
          dispatch({ type: userConstants.LOGIN_SUCCESS, user });
        },
        (error) => {
          console.log(error);
          dispatch({ type: userConstants.LOGIN_SUCCESS, error });
        },
      );
  };
}

const userActions = {
  login,
};

export default userActions;
