import { alertConstants } from '../_constants';

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function information(message) {
  return { type: alertConstants.INFO, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

const alertActions = {
  success,
  error,
  information,
  clear,
};

export default alertActions;
