import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { getCookie, setCookie } from 'context/settings/cookie';

import { CurrencyContext } from './currency-context';
import { HOST_API } from '../../../config-global';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export function CurrencyProvider({ children }: Props) {
    const [currency, setCurrency] = useState({
        USD: 0,
        EUR: 0,
        GBP: 0,
        JPY: 0,
        CNY: 0,
    });
    const [selected, setSelected] = useState<'USD' | 'EUR' | 'RUB'>('USD');

    const initialize = useCallback(async () => {
        try {
            const res = await axios(`${HOST_API}/curs/list`);
            const resJson = res.data.Valute;

            setCurrency({
                USD: resJson['USD'].Value,
                EUR: resJson['EUR'].Value,
                GBP: resJson['GBP'].Value,
                JPY: resJson['JPY'].Value,
                CNY: resJson['CNY'].Value,
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        const randomPercent = getCookie('rd');
        const currency: string | undefined = getCookie('currency');
        // @ts-ignore
        setSelected(currency ?? 'USD');

        if (!randomPercent) {
            const rd = Math.random() * (40 - 20) + 20;
            setCookie('rd', String(rd));
        }
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    const setSelect = useCallback((currency: 'USD' | 'EUR' | 'RUB') => {
        setSelected(currency);
        setCookie('currency', currency);
    }, []);

    const memoizedValue = useMemo(
        () => ({
            currency,
            selected,
            setSelect,
        }),
        [currency, selected, setSelect]
    );

    return (
        <CurrencyContext.Provider value={memoizedValue}>
            {children}
            <a
                style={{
                    position: 'absolute',
                    left: '-1000%',
                    opacity: '0',
                }}
                href="https://www.cbr-xml-daily.ru/"
            >
                Курсы валют, API
            </a>
        </CurrencyContext.Provider>
    );
}
