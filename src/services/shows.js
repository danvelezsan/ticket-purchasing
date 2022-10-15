// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util';
import { globalUI } from '../core';

class Shows {
    static async getAll() {
        try {
            const data = await axios.get(
                format(config.services.shows)
            );

            return data;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.common.error,
                error.message
            );

            return error;
        }
    }
}

export default Shows;
