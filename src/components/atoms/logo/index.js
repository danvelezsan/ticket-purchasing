// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import { ReactComponent as ProspectiveIcon } from './logo.svg';
import classNames from 'classnames';

// @styles
import styles from './styles';

const Logo = ({
    className,
    classes,
    rounded,
    size
}) => (
    <ProspectiveIcon
        height={size}
        width={size}
        className={classNames(
            classes.logo,
            rounded && classes.rounded,
            className
        )}
    />
);

Logo.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    rounded: PropTypes.bool,
    size: PropTypes.number
};

Logo.defaultProps = {
    className: null,
    rounded: false,
    size: 32
};

export default withStyles(styles)(Logo);
