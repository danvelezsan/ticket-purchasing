// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { format } from '../util';
import { globalUI } from '../core';

class ServiceExample {
    static async getData(queryParam1) {
        try {
            const data = await axios.get(
                format(config.services.api2.endpoint1, queryParam1)
            );

            return data;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.services.api2.error,
                error.message
            );

            return error;
        }
    }
}

export default ServiceExample;
