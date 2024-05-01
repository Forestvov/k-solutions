import axios from 'axios';

import { HOST_API } from '../config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

export const fetcher = async (args: string) => {
    const [url, payload, method = 'get', headers = {}] = Array.isArray(args) ? args : [args];

    if (method.toLowerCase() === 'post') {
        const res = await axiosInstance.post(url, payload, { headers });
        return res.data;
    }

    if (method.toLowerCase() === 'put') {
        const res = await axiosInstance.put(url, payload, { headers });
        return res.data;
    }

    const res = await axiosInstance.get(url, { headers });
    return res.data;
};

export const endpoints = {
    auth: {
        me: '/account/me',
        login: '/auth/authenticate',
        register: '/auth/register',
        send_verify: '/auth/send-verify',
        verify: '/auth/verify',
    },
};
