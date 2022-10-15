// @scripts
import { SHOW_ALERT_NOTIFICATION, HIDE_ALERT_NOTIFICATION } from '../actions';
import { config } from '../config';

/**
 * @return {{isVisible: boolean, title: string, msg: string, type: string}}
 */
export const alertNotificationReducer = (
    state = config.initialState.alertNotification, action
) => {
    switch (action.type) {
        case SHOW_ALERT_NOTIFICATION:
            return {
                isVisible: true,
                msg: action.payload.msg,
                title: action.payload.title,
                type: action.payload.type
            };
        case HIDE_ALERT_NOTIFICATION:
            return {
                isVisible: false,
                msg: null,
                title: null,
                type: null
            };
        default:
            return state;
    }
};
