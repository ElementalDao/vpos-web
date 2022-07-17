import { combineReducers } from "redux";
import componentsReducer from "./componentsReducer";
import alertsReducer from "./alertsReducer";
import authReducer from "./authReducer";

export default combineReducers({
    comp: componentsReducer,
    auth: authReducer,
    alerts: alertsReducer
});
