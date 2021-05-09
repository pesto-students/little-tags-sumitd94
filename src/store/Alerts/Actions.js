import { ALERT_CONSTANTS } from '../../AppConstants';

const {
  SUCCESS, ERROR, INFO, CLEAR,
} = ALERT_CONSTANTS;

const success = (message) => ({ type: SUCCESS, message });

const error = (message) => ({ type: ERROR, message });

const information = (message) => ({ type: INFO, message });

const clear = () => ({ type: CLEAR });

const alertActions = {
  success,
  error,
  information,
  clear,
};

export default alertActions;
