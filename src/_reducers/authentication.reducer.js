import userConstants from '../_constants/user.constants';

const user = localStorage.getItem('littleTags');
let initialState = { firstTime: true };
if (user) {
  initialState = {
    ...initialState,
    firstTime: false,
  };
} else {
  localStorage.setItem('littleTags', JSON.stringify({ visited: 'yes' }));
}

// check loggedin state
const userLoggedinStatus = localStorage.getItem('loggedIn') && localStorage.getItem('user');
if (userLoggedinStatus) {
  initialState.loggedIn = true;
  initialState.user = JSON.parse(localStorage.getItem('user'));
} else {
  initialState.loggedIn = false;
}

function manageSuccessLogin(data) {
  localStorage.setItem('loggedIn', data.loggedIn);
  localStorage.setItem('user', JSON.stringify(data.user));
  return data;
}

function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return manageSuccessLogin({
        loggedIn: true,
        user: {
          email: action.user.email,
          uid: action.user.uid,
          displayName: action.user.displayName,
        },
      });
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

export default authentication;
