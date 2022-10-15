// @scripts
import initialState from './initial-state';
import language from './text';
import masterData from './master-data';
import mockData from './mock-data';
import routes from './routes';
import settings from './settings';
import { getServices } from './services';

const getConfiguration = () => {
    const servicesPlaceholders = settings.services;
    const services = getServices(servicesPlaceholders);
    const config = {
        initialState,
        masterData,
        mockData,
        routes,
        services,
        settings,
        text: language[initialState.language]
    };

    global.config = config;

    return config;
};

export const config = getConfiguration();
