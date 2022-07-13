import { SET_ALERT_ERROR, SET_ALERT_INFO, SET_ALERT_SUCCESS, SET_ALERT_WARNING } from "./types";

export function setAlertError(p: Object) {
    return {
        type: SET_ALERT_ERROR,
        payload: p
    };
};
export function setAlertWarning(p: Object) {
    return {
        type: SET_ALERT_WARNING,
        payload: p
    };
};
export function setAlertInfo(p: Object) {
    return {
        type: SET_ALERT_INFO,
        payload: p
    };
};
export function setAlertSuccess(p: Object) {
    return {
        type: SET_ALERT_SUCCESS,
        payload: p
    };
};