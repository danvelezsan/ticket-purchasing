// @packages
import { bindActionCreators } from 'redux';

// @scripts
import {
    hideAlertNotification,
    showAlertNotificationError,
    showAlertNotificationInfo,
    showAlertNotificationSuccess
} from '../actions';

/**
 * @param {Store} store - The redux store.
 * @return {Object}
 */
export const initializeGlobalUI = (store) => {
    const globalUI = bindActionCreators({
        showAlertNotificationError,
        showAlertNotificationInfo,
        showAlertNotificationSuccess
    }, store.dispatch);

    globalUI.hideAlertNotification = () => {
        if (store.getState().alert.isVisible) {
            store.dispatch(hideAlertNotification());
        }
    };

    return globalUI;
};
