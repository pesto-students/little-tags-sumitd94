import userConstants from '../_constants/user.constants';

const user = localStorage.getItem('littleTags');
let initialState = { firstTime: true };
if (user) {
  initialState = { firstTime: false };
} else {
  localStorage.setItem('littleTags', JSON.stringify({ visited: 'yes' }));
}

function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

export default authentication;
