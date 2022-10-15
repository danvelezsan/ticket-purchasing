// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGOUT } from '../actions';
import { alertNotificationReducer } from './alert-notification';
import { userReducer } from './user';

const appReducer = combineReducers({
    alert: alertNotificationReducer,
    user: userReducer
});

/**
 * We wrap the appReducer into this rootReducer in order to easily
 * handle the LOGOUT event, on which we should reset the state back
 * to the to initial state.
 * @param {Object} state - Current application state.
 * @param {Object} action - Current dispatched action.
 * @return {Object}
 */
export const rootReducer = (state, action) => {
    const currentState = (action.type === LOGOUT)
        ? undefined
        : state;
    return appReducer(currentState, action);
};
