// @packages
import React from 'react';
import DashboardMenuMapper from '../../components/organisms/dashboard-menu-mapper';

// @scripts
import TemplateDashboard from '../../components/templates/dashboard';
import { MainMenuProvider, useMainMenuContext } from '../../providers/main-menu';
import { useExpandMainMenu } from '../../providers/main-menu/actions';

// eslint-disable-next-line react/prop-types
const Dashboard = ({ children }) => {
    const { expanded, visible } = useMainMenuContext();
    const expandMainMenu = useExpandMainMenu();

    return (
        <TemplateDashboard
            isMenuExpanded={expanded}
            isMenuVisible={visible}
            setMenuExpanded={expandMainMenu}
        >
            {children}
        </TemplateDashboard>
    );
};

const DashboardPage = () => (
    <MainMenuProvider>
        <Dashboard>
            <DashboardMenuMapper />
        </Dashboard>
    </MainMenuProvider>
);

export default DashboardPage;
