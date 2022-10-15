// @packages
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { useTheme, withStyles } from '@material-ui/core';

// @scripts
import ActionBar from '../../atoms/action-bar';
import ActionItem from './action-item';
import styles from './styles';
import { config } from '../../../config';
import { dimensions } from '../../../styles/global';
import { useHistory } from 'react-router';

const DefaultActionBar = ({
    classes,
    id,
    isExpanded,
    onCollapse,
    onExpand,
    visible,
    width
}) => {
    const theme = useTheme();
    const { account: { name } } = useSelector(state => state.user);

    if (!visible) {
        return null;
    }

    const history = useHistory();

    const onSelectItem = item => (event) => {
        event.stopPropagation();
        onCollapse();
        history.replace(item);
    };

    const topActions = [
        isExpanded && (
            <Typography
                className={classes.textName}
                key="user-name"
                variant="body2"
            >
                {name}
            </Typography>
        ),
        <ActionItem
            color={theme.palette.text.secondary}
            description={config.text.mainMenu.menuItem1}
            expanded={isExpanded}
            icon="data_usage"
            key="home2"
            onClick={onSelectItem(config.routes.dashboard.page1.url)}
        />,
        isExpanded && (
            <Divider
                className={classes.divider}
                key="divider"
                variant="fullWidth"
            />
        ),
        <ActionItem
            color={theme.palette.text.secondary}
            expanded={isExpanded}
            description={config.text.mainMenu.menuItem2}
            icon="description"
            key="projects"
            onClick={onSelectItem(config.routes.dashboard.page2.url)}
        />
    ].filter(Boolean);

    const bottomActions = [
        <ActionItem
            bottomItem
            color={theme.palette.text.primary}
            expanded={isExpanded}
            description={config.text.mainMenu.account}
            icon="person"
            key="user"
        />,
        isExpanded && (
            <Divider
                className={classes.dividerBottom}
                key="divider"
                variant="fullWidth"
            />
        ),
        <ActionItem
            bottomItem
            color={theme.palette.text.primary}
            expanded={isExpanded}
            description={config.text.mainMenu.logout}
            icon="logout"
            key="logout"
        />,
        <ActionItem
            bottomItem
            color={theme.palette.text.primary}
            expanded={isExpanded}
            description={config.text.mainMenu.privacyPolicy}
            icon="description"
            key="privacyPolicy"
        />
    ].filter(Boolean);

    return (
        <ActionBar
            backgroundColor={theme.palette.backgroundColor}
            bottomActions={bottomActions}
            id={id}
            onClickAway={onCollapse}
            onClickInside={onExpand}
            topActions={topActions}
            width={width}
        />
    );
};

DefaultActionBar.propTypes = {
    classes: PropTypes.object.isRequired,
    isExpanded: PropTypes.bool,
    onExpand: PropTypes.func.isRequired,
    onCollapse: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    visible: PropTypes.bool,
    width: PropTypes.number
};

DefaultActionBar.defaultProps = {
    isExpanded: false,
    visible: true,
    width: dimensions.MAIN_MENU_EXPANDED_WIDTH
};

export default withStyles(styles)(DefaultActionBar);
