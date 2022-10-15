// @packages
import PropTypes from 'prop-types';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useTheme, withStyles } from '@material-ui/core';

// @script
import { config } from '../../../config';
import { constants } from '../../../core';

// @styles
import styles from './styles';

const NotificationAlert = ({
    classes,
    id,
    onHide,
    severity,
    text,
    title,
    visible
}) => {
    const theme = useTheme();

    if (!visible) {
        return null;
    }

    const color = () => {
        switch (severity) {
            case constants.notificationType.SUCCESS:
                return theme.palette.primary.success;
            case constants.notificationType.ERROR:
                return theme.palette.primary.error;
            case constants.notificationType.INFO:
                return theme.palette.primary.info;
            default:
                return '';
        }
    };

    return (
        <Snackbar
            autoHideDuration={config.settings.alertNotification.autoHideDuration}
            className={classes.container}
            id={id}
            onClose={onHide}
            open
            style={{ borderLeft: `5px solid ${color()}` }}
        >
            <Alert
                className={classes.alert}
                onClose={onHide}
                severity={severity}
            >
                <AlertTitle>
                    {title}
                </AlertTitle>
                {text}
            </Alert>
        </Snackbar>
    );
};

NotificationAlert.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired,
    severity: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool
};

NotificationAlert.defaultProps = {
    visible: true
};

export default withStyles(styles)(NotificationAlert);
