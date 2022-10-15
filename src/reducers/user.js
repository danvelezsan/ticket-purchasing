// @packages
import { combineReducers } from 'redux';

// @scripts
import { LOGIN, LOGOUT } from '../actions';
import { config } from '../config';

/**
 * @return {{
 *  authToken: string,
 *  id: string,
 *  name: string,
 *  email: string,
 *  password: string
 * }}
 */
const accountReducer = (
    state = config.initialState.user.account, action
) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return config.initialState.user.account;
        default:
            return state;
    }
};

export const userReducer = combineReducers({
    account: accountReducer
});
