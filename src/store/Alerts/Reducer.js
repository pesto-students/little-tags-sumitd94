import { ALERT_CONSTANTS } from '../../AppConstants';

const {
  SUCCESS, ERROR, INFO, CLEAR,
} = ALERT_CONSTANTS;

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case INFO:
      return {
        type: 'alert-info',
        message: action.message,
      };
    case CLEAR:
      return {};
    default:
      return state;
  }
};

export default reducer;
