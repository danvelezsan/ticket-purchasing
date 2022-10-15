// @scripts
import { constants } from '../core';

// @constants
export const HIDE_ALERT_NOTIFICATION = 'HIDE_ALERT_NOTIFICATION';
export const SHOW_ALERT_NOTIFICATION = 'SHOW_ALERT_NOTIFICATION';

/**
 * @param {string} title
 * @param {string} msg
 * @param {string} type - See constants.notificationType
 */
export const showAlertNotification = ({ title, msg, type }) =>
    ({
        type: SHOW_ALERT_NOTIFICATION,
        payload: {
            title,
            msg,
            type
        }
    });

/**
 * @param {string} title
 * @param {string} msg
 */
export const showAlertNotificationError = (title, msg) =>
    showAlertNotification({
        title,
        msg,
        type: constants.notificationType.ERROR
    });

/**
 * @param {string} title
 * @param {string} msg
 */
export const showAlertNotificationInfo = (title, msg) =>
    showAlertNotification({
        title,
        msg,
        type: constants.notificationType.INFO
    });

/**
 * @param {string} title
 * @param {string} msg
 */
export const showAlertNotificationSuccess = (title, msg) =>
    showAlertNotification({
        title,
        msg,
        type: constants.notificationType.SUCCESS
    });

export const hideAlertNotification = () =>
    ({
        type: HIDE_ALERT_NOTIFICATION
    });
