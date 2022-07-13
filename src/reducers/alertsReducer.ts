import { SET_ALERT_ERROR, SET_ALERT_INFO, SET_ALERT_SUCCESS, SET_ALERT_WARNING } from '../actions/types'

const initialState: any = {
  error: null,
  info: null,
  warning: null,
  success: null
};

export default function alertsReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ALERT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_ALERT_INFO:
      return {
        ...state,
        info: action.payload
      };
    case SET_ALERT_WARNING:
      return {
        ...state,
        warning: action.payload
      };
    case SET_ALERT_SUCCESS:
      return {
        ...state,
        success: action.payload
      };
    default:
      return state;
  }
}
