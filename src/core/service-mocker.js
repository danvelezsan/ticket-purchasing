// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';
import { createMockResponse, getMockParams } from '../util';

// @constants
const httpCodes = {
    success: 200,
    unauthorized: 401
};

const mockedServices = {
    mockServiceSecurityLogin: (mockAdapter) => {
        mockAdapter.onPost(config.services.security.login).reply((call) => {
            const { user, password } = getMockParams(call);
            const { loginUserName, loginPassword } = config.settings.serviceMocker;

            const success = (user === loginUserName) && (password === (loginPassword));
            return createMockResponse({
                data: success ? config.mockData.security.user : null,
                httpCode: success ? httpCodes.success : httpCodes.unauthorized
            });
        });
    },
    mockServiceShows: (mockAdapter) => {
        mockAdapter.onGet(config.services.shows).reply(() => createMockResponse({
            data: config.mockData.shows,
            httpCode: httpCodes.success
        }));
    }
};

export const initializeServiceMocker = (store) => {
    const mockAdapter = new MockAdapter(axios, { delayResponse: config.settings.serviceMocker.delayResponse });
    const serviceMocker = {
        replyWithMockData: () => {
            const include = config.settings.serviceMocker.include || [];
            Object.keys(mockedServices).forEach((name) => {
                if (include.some(item => item === name)) {
                    mockedServices[name](mockAdapter, store);
                }
            });
            mockAdapter.onAny().passThrough();
        },
        replyWithNetworkError: () => {
            mockAdapter.reset();
            mockAdapter.onAny().networkError();
        }
    };

    serviceMocker.replyWithMockData();
    return serviceMocker;
};
