import axios, { endpoints } from 'helpers/axios';

export const upadteAccount = async (data: Request) => {
    await axios.put(endpoints.account.update, data);
};
