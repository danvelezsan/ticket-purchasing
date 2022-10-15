// @packages
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import { dimensions } from '../../../styles/global';

// @styles
import styles from './styles';

const ActionBar = ({
    backgroundColor,
    bottomActions,
    classes,
    id,
    onClickAway,
    onClickInside,
    topActions,
    width
}) => (
    <ClickAwayListener onClickAway={onClickAway}>
        <Paper
            className={classes.mainContainer}
            id={id}
            onClick={onClickInside}
            style={{
                backgroundColor,
                width
            }}
        >
            <div className={classes.topActions}>
                {topActions.map(actionComponent => (
                    React.cloneElement(actionComponent)
                ))}
            </div>
            <div className={classes.bottomActions}>
                {bottomActions.map(actionComponent => (
                    React.cloneElement(actionComponent)
                ))}
            </div>
        </Paper>
    </ClickAwayListener>
);

ActionBar.propTypes = {
    backgroundColor: PropTypes.string,
    bottomActions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        label: PropTypes.string,
        onClick: PropTypes.func
    })),
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClickAway: PropTypes.func,
    onClickInside: PropTypes.func,
    topActions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node,
        label: PropTypes.string,
        onClick: PropTypes.func
    })),
    width: PropTypes.number
};

ActionBar.defaultProps = {
    backgroundColor: null,
    bottomActions: [],
    onClickAway: Function.prototype,
    onClickInside: Function.prototype,
    topActions: [],
    width: dimensions.MAIN_MENU_COLLAPSED_WIDTH
};

export default withStyles(styles)(ActionBar);
