export function getCookie(name: string) {
    let matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string, options = {}) {
    // eslint-disable-next-line no-param-reassign
    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options,
    };

    // @ts-ignore
    if (options.expires instanceof Date) {
        // @ts-ignore
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    // @ts-ignore
    // eslint-disable-next-line guard-for-in
    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey;
        // @ts-ignore
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }

    document.cookie = updatedCookie;
}
