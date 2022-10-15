// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// @scripts
import NotificationAlert from '../alert';
import { globalUI } from '../../../core';

const CommonControls = ({
    alertNotificationMsg,
    alertNotificationTitle,
    alertNotificationType,
    alertNotificationVisible
}) => ([
    <NotificationAlert
        id="ctrl-alert-notification"
        key="ctrl-alert-notification"
        onHide={globalUI.hideAlertNotification}
        severity={alertNotificationType}
        text={alertNotificationMsg}
        title={alertNotificationTitle}
        visible={alertNotificationVisible}
    />
]);

CommonControls.propTypes = {
    alertNotificationProps: PropTypes.shape({
        isVisible: PropTypes.bool.isRequired,
        msg: PropTypes.string,
        onHide: PropTypes.func.isRequired,
        title: PropTypes.string,
        type: PropTypes.string
    }).isRequired
};
const mapStateToProps = ({
    alert
}) => ({
    alertNotificationMsg: alert.msg,
    alertNotificationTitle: alert.title,
    alertNotificationType: alert.type,
    alertNotificationVisible: alert.isVisible
});

export default connect(mapStateToProps)(CommonControls);
