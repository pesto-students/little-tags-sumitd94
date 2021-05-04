import { USER_CONSTANTS } from '../../AppConstants';

const {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE,
} = USER_CONSTANTS;

const setForFirstTime = () => {
  localStorage.setItem('littleTags', JSON.stringify({ visited: 'yes' }));
};

const user = localStorage.getItem('littleTags');
let initialState = { firstTime: true };
if (user) {
  initialState = {
    ...initialState,
    firstTime: false,
  };
} else {
  setForFirstTime();
}

// check loggedin state
const userLoggedinStatus = localStorage.getItem('loggedIn') && localStorage.getItem('user');
if (userLoggedinStatus) {
  initialState.loggedIn = true;
  initialState.user = JSON.parse(localStorage.getItem('user'));
} else {
  initialState.loggedIn = false;
}

const manageSuccessLogin = (data) => {
  localStorage.setItem('loggedIn', data.loggedIn);
  localStorage.setItem('user', JSON.stringify(data.user));
  return data;
};

const manageLogout = () => {
  localStorage.clear();
  setForFirstTime();
  return {};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case LOGIN_SUCCESS:
      return manageSuccessLogin({
        loggedIn: true,
        user: {
          email: action.user.email,
          uid: action.user.uid,
          displayName: action.user.displayName,
        },
      });
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return manageLogout();
    default:
      return state;
  }
};

export default reducer;
