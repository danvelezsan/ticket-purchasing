// @packages
import merge from 'deepmerge';

// @json
import envLocal from './env-local.json';
import globals from './globals.json';

// @scripts
import { constants } from '../../core/constants';

/**
 * @return {Object}
 */
const getSettings = () => {
    switch (process.env.REACT_APP_ENV) {
        case constants.environment.LOCAL:
        default:
            return merge(globals, envLocal);
    }
};

export default getSettings();
