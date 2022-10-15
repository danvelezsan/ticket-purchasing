// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const Login = ({
    backgroundComponent,
    classes,
    children
}) => (
    <div className={classes.mainContainer}>
        <div>
            <div className={classes.background} />
            {backgroundComponent}
        </div>
        <div className={classes.content}>
            {children}
        </div>
    </div>
);

Login.propTypes = {
    backgroundComponent: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
