import axios, { endpoints } from 'helpers/axios';

interface Request {
    phoneNumber: string;
    module: string;
}

export const addContact = async (data: Request) => {
    await axios.post(endpoints.order.root, data);
};
