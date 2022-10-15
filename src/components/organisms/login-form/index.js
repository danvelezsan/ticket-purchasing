// @packages
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// @scripts
import { config } from '../../../config';
import { login } from '../../../actions';

// @styles
import styles from './styles';

const LoginForm = ({
    classes,
    id
}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { authToken } = useSelector(state => state.user.account);

    const onLogin = () => {
        dispatch(login({
            email: config.mockData.security.user.email,
            password: '123'
        }));
    };

    useEffect(() => {
        if (authToken) {
            history.push(config.routes.application.home.url);
        }
    }, [authToken]);

    return (
        <Paper
            className={classes.mainContainer}
            elevation={2}
            id={id}
        >
            <div className={classes.content}>
                <div>
                    <Typography className={classes.title} variant="h3">
                        Welcome
                    </Typography>
                    <Typography className={classes.subtitle} variant="body1">
                        Login in your account
                    </Typography>
                </div>
                <Button className={classes.loginButton} onClick={onLogin}>
                    {config.text.loginPage.login}
                </Button>
            </div>
        </Paper>
    );
};

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

LoginForm.defaultProps = {
};

export default withStyles(styles)(LoginForm);
