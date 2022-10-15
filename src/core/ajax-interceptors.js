/*
    These ajax interceptors are useful for:
        - Process the request to be sent to the server.
        - Process the response received from the server.
        - Show the loading page when the HTTP request is in progress.
        - Show a notification when the server sends a message in the response,
          or when there is an error executing the request.
        - Send the Bearer Authentication Token for all requests.

    Process the request:
        - If ajaxInterceptors.convertRequestDataTo is set to "PascalCase"
          into the globals.json file, all request arguments will be
          sent in PascalCase.
        - If ajaxInterceptors.convertRequestDataTo is set to "camelCase"
          into the globals.json file, all request arguments will be
          sent in camelCase.
        - You can override above configuration for a particular request as
          show bellow. You can use again "PascalCase", "camelCase" or "none"
          (none means no convertion is done):
            axios.post(config.services.user.login, {
                params: { userName, password },
                settings: { convertRequestDataTo: "none" }
            })

    Show the loading page:
        - Can be globally activated for all requests by setting
          ajaxInterceptors.showLoadingPage to true into the
          globals.json file.
        - Can be activated/deactivated by each request as follow:
            axios.post(config.services.user.login, {
                settings: {
                    showLoadingPage: true
                }
            })
            axios.post(config.services.user.login, {
                settings: {
                    loadingMsg: 'Authenticating {0}...',
                    loadingMsgArgs: 'user'
                }
            })

    Show notifications:
        - In a similar way as the loading page is shown, to show notifications
          when the server sends a message in the response or when there is an
          error executing the request, use property "showNotifications".
*/

// @packages
import axios from 'axios';

// @scripts
import { store, environment } from '.';
import { printError } from '../util';

/**
 * @param {Object} error - Error object received from Axios.
 * @return {Promise}
 */
const handleError = (error) => {
    if (!environment.isUnitTest) {
        printError(error);
        throw error;
    }
};

const addRequestInterceptors = () => {
    axios.interceptors.request.use(
        (request) => {
            const { authToken } = store.getState().user.account;

            if (authToken) {
                request.headers.Authorization = `Bearer ${authToken}`;
            }

            request.headers['Content-Type'] = 'application/json';

            return request;
        },
        error => handleError(error)
    );
};

const addResponseInterceptors = () => {
    axios.interceptors.response.use(
        (response) => {
            if (!response?.config) {
                return response;
            }

            return response.data;
        },
        error => handleError(error)
    );
};

export const addAjaxInterceptors = () => {
    addRequestInterceptors();
    addResponseInterceptors();
};
