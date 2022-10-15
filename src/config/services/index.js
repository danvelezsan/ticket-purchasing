// @json
import services from './services.json';

/**
 * @param {string} rootUrl - The base service url for the current environment.
 * @return {Object}
 */
export const getServices = (servicesPlaceholders) => {
    const servicesString = JSON.stringify(services);

    const parsedServices = Object.entries(servicesPlaceholders).reduce(
        (servicesString, [serviceName, serviceUrl]) => servicesString.replace(
            new RegExp(`{${serviceName}}`, 'g'),
            serviceUrl
        ),
        servicesString
    );

    return JSON.parse(parsedServices);
};
