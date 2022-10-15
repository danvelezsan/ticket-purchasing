// @scripts
import { config } from '../../config';
import {
    LOGIN,
    LOGOUT,
    login,
    logout
} from '../../actions';

describe('login', () => {
    test('login', () => {
        const credentials = {
            email: config.settings.serviceMocker.loginUserName,
            password: config.settings.serviceMocker.loginPassword
        };
        const actionCreator = login(credentials);
        const expectedActions = [{
            type: LOGIN,
            payload: config.mockData.security.user
        }];

        return global.testDispatch(actionCreator, expectedActions);
    });
});

describe('logout', () => {
    test('logout', () => {
        const actionCreator = logout();
        const expectedActions = [{
            type: LOGOUT
        }];

        return global.testDispatch(actionCreator, expectedActions);
    });
});
