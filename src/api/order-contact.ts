import { default as axiosDefault } from 'axios';
import { endpoints } from 'helpers/axios';

import { HOST_API } from '../config-global';

interface Request {
    phoneNumber: string;
    module: string;
}

export const addContact = async (data: Request) => {
    await axiosDefault.post(`${HOST_API}/${endpoints.order.root}`, data);
};
