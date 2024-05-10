import { createContext } from 'react';

// ----------------------------------------------------------------------

export const CurrencyContext = createContext({
    currency: {
        USD: 0,
        EUR: 0,
        GBP: 0,
        JPY: 0,
        CNY: 0,
    },
    selected: 'USD',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelect: (currency: 'USD' | 'EUR' | 'RUB') => {},
});
