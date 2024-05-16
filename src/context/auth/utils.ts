import axios from 'helpers/axios';

function jwtDecode(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join('')
    );

    return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = (acceptToken: string) => {
    if (!acceptToken) {
        return false;
    }

    const decoded = jwtDecode(acceptToken);

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const setSession = (acceptToken: string | null) => {
    if (acceptToken) {
        localStorage.setItem('acceptToken', acceptToken);

        axios.defaults.headers.common.Authorization = acceptToken;
    } else {
        localStorage.removeItem('acceptToken');

        delete axios.defaults.headers.common.Authorization;
    }
};
