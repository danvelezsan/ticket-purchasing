/**
 * Loads the current application state persisted into the local storage.
 * @param {function} getStorage - Function that returns a Storage object
 *  (localStorage or sessionStorage) according to the device name specified
 *  as argument.
 * @param {string} device - Valid values are: 'localStorage' and 'sessionStorage'.
 * @param {string} key - Key used to save the state into the local storage.
 * @returns {Object}
 */
export const loadState = ({
    device,
    getStorage,
    key
}) => {
    try {
        const storage = getStorage(device);

        if (!storage) {
            return undefined;
        }

        const serializedState = storage.getItem(key);

        if (!serializedState) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

/**
 * Saves the current application state into the local storage.
 * @param {function} getStorage - Function that returns a Storage object
 *  (localStorage or sessionStorage) according to the device name specified
 *  as argument.
 * @param {string} device - Valid values are: 'localStorage' and 'sessionStorage'.
 * @param {string} key - Key used to save the state into the local storage.
 * @param {Object} state - The state to be persisted.
 */
export const saveState = ({
    device,
    getStorage,
    key,
    state
}) => {
    try {
        const storage = getStorage(device);

        if (storage) {
            const serializedState = JSON.stringify(state);
            storage.setItem(key, serializedState);
        }
    // eslint-disable-next-line no-empty
    } catch (err) {}
};
