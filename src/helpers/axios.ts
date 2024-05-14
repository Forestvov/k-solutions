import axios from 'axios';

import { HOST_API } from '../config-global';

// ----------------------------------------------------------------------

const splitArr = window.location.href.split('/');
const id = Number(splitArr[splitArr.length - 2]);

const axiosInstance = axios.create({
    baseURL: HOST_API,
    headers: id
        ? {
              'Account-Id': id,
          }
        : {},
});

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
        me: 'account/me',
        balance: 'account/balance',
        login: 'auth/authenticate',
        register: 'auth/register',
        send_verify: 'auth/send-verify',
        verify: 'auth/verify',
    },
    account: {
        update: 'account/me',
        changePassword: 'auth/change-password',
        addFile: 'account/file',
        settingSet: 'account/setting/set',
    },
    order: {
        root: 'order-contact',
    },
    news: {
        list: 'news/page',
    },
    settings: {
        root: 'setting/code',
    },
    briefs: {
        page: 'briefcase/language',
        list: 'briefcase/page',
        hot: 'briefcase-account/page/common',
        invest: 'briefcase-account/invest',
        close: 'briefcase-account/send-order-close',
        myInvest: 'briefcase-account/page/my',
        analiticActiveByUser: 'briefcase-account/analitic-active-by-user',
        analiticGainByUser: 'briefcase-account/analitic-gain-by-date',
        gainHistory: 'briefcase-account/gain-history',
    },
    company: {
        page: 'company-invest',
        slider: 'company-invest/file/list',
    },
    transaction: {
        tokens: 'transaction/get-token-list',
        add: 'transaction',
        setMarkAs: 'transaction/set-mark-as-paid',
        history: 'transaction/history',
    },
};
