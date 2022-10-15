import Security from '../services/security';

// @constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * @param {string} authToken
 * @param {string} email
 * @param {string} name
 */
export const login = ({
    email,
    password
}) => async (dispatch) => {
    const user = await Security.login(email, password);

    dispatch({
        type: LOGIN,
        payload: user
    });

    return user;
};

export const logout = () => ({
    type: LOGOUT
});
