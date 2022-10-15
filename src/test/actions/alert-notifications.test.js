// @scripts
import { constants } from '../../core';

import {
    HIDE_ALERT_NOTIFICATION,
    SHOW_ALERT_NOTIFICATION,
    hideAlertNotification,
    showAlertNotification,
    showAlertNotificationError,
    showAlertNotificationInfo,
    showAlertNotificationSuccess
} from '../../actions';

describe('showAlert', () => {
    test('showAlertNotificationError', () => {
        const title = 'ERROR';
        const msg = 'It is is an error message';
        const actionCreator = showAlertNotificationError(title, msg);
        const expectedActions = [{
            type: SHOW_ALERT_NOTIFICATION,
            payload: {
                title,
                msg,
                type: constants.notificationType.ERROR
            }
        }];

        return global.testDispatch(actionCreator, expectedActions);
    });

    test('showAlertNotificationInfo', () => {
        const title = 'INFO';
        const msg = 'Is is an info message';
        const actionCreator = showAlertNotificationInfo(title, msg);
        const expectedActions = [{
            type: SHOW_ALERT_NOTIFICATION,
            payload: {
                title,
                msg,
                type: constants.notificationType.INFO
            }
        }];

        return global.testDispatch(actionCreator, expectedActions);
    });

    test('showAlertNotificationSuccess', () => {
        const title = 'Success';
        const msg = 'Is is an exit message';
        const actionCreator = showAlertNotificationSuccess(title, msg);
        const expectedActions = [{
            type: SHOW_ALERT_NOTIFICATION,
            payload: {
                title,
                msg,
                type: constants.notificationType.SUCCESS
            }
        }];

        return global.testDispatch(actionCreator, expectedActions);
    });

    test('showAlertNotification', () => {
        const params = {
            title: 'ALERT',
            msg: 'Is is an alert',
            type: constants.notificationType.INFO
        };
        const actionCreator = showAlertNotification(params);
        const expectedActions = [{
            type: SHOW_ALERT_NOTIFICATION,
            payload: params
        }];

        return global.testDispatch(actionCreator, expectedActions);
    });
});

describe('hideAlert', () => {
    test('hideAlertNotification', () => {
        const actionCreator = hideAlertNotification();
        const expectedActions = [{
            type: HIDE_ALERT_NOTIFICATION
        }];

        return global.testDispatch(actionCreator, expectedActions);
    });
});
