import { getCookie } from 'context/settings/cookie';

function getLocaleCurrency() {
    const currency = getCookie('currency');

    if (currency === 'USD') {
        return {
            code: 'en-US',
            currency: 'USD',
        };
    } else if (currency === 'EUR') {
        return {
            code: 'de-DE',
            currency: 'EUR',
        };
    } else {
        return {
            code: 'ru-RU',
            currency: 'RUB',
        };
    }
}

const generateEmptyPrefix = (locale: string) => {
    console.log(locale);
    switch (locale) {
        case 'USD':
            return '$0';
        case 'EUR':
            return '0 €';
        default:
            return '0 ₽';
    }
};

export function fNumber(inputValue: number | string) {
    if (!inputValue) return '';

    const number = Number(inputValue);

    const fm = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(number);

    return fm;
}

export function fCurrency(inputValue: number | string, locale?: string, _currency?: string) {
    const { code, currency } = getLocaleCurrency();

    if (!inputValue) return generateEmptyPrefix(currency);

    const number = Number(inputValue);

    const fm = new Intl.NumberFormat(locale ?? code, {
        style: 'currency',
        currency: _currency ?? currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(number);

    return fm;
}

// ----------------------------------------------------------------------

export function fPercent(inputValue: number | string) {
    if (!inputValue) return '';

    const number = Number(inputValue) / 100;

    const fm = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    }).format(number);

    return fm;
}
