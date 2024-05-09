import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { fCurrency, fPercent } from 'helpers/number-format';
import { getCurrency } from 'api/balance';
import { getCookie } from 'context/settings/cookie';

import Title from '../../title';
import GrayWrapper from '../gray-wrapper';

import type { CurrencyType } from './types';
import CurrencyButtons from './currency-buttons';
import ItemInfo from './item-info';
import Replenish from './replenish';

const generateLocale = (locale: CurrencyType) => {
    switch (locale) {
        case 'dollar':
            return 'en-US';
        case 'euro':
            return 'de-DE';
        default:
            return 'ru-RU';
    }
};

const generateCurrency = (locale: CurrencyType) => {
    switch (locale) {
        case 'dollar':
            return 'USD';
        case 'euro':
            return 'EUR';
        default:
            return 'RUB';
    }
};

const generateEmptyPrefix = (locale: CurrencyType) => {
    switch (locale) {
        case 'dollar':
            return '$0';
        case 'euro':
            return '0 €';
        default:
            return '0 ₽';
    }
};

const AllAssets = () => {
    const { t } = useTranslation('personal');

    const [currency, setCurrency] = useState<CurrencyType>('dollar');

    const [demoCurrency, setDemoCurrency] = useState('0');

    const [currencyRubValue, setCurrencyRubValue] = useState(1);
    const [currencyEuroValue, setCurrencyEuroValue] = useState(1);

    const [balance, setBalance] = useState(0);
    const [active, setActive] = useState(0);
    const [briefcaseBalance, setBriefcaseBalance] = useState(0);

    // @ts-ignore
    const { user } = useAuthContext();

    useEffect(() => {
        const demo = getCookie('rd');

        setDemoCurrency(demo ?? '0');

        getCurrency().then(({ data }) => {
            setCurrencyRubValue(data.USDRUB);
            setCurrencyEuroValue(data.EURRUB);
        });
    }, []);

    useEffect(() => {
        if (currency) {
            if (currency === 'rub') {
                setBalance(user.balance.balance * currencyRubValue);
                setActive(user.balance.activeBalance * currencyRubValue);
                setBriefcaseBalance(user.balance.briefcaseBalance * currencyRubValue);
            } else if (currency === 'euro') {
                setBalance((user.balance.balance * currencyRubValue) / currencyEuroValue);
                setActive((user.balance.activeBalance * currencyRubValue) / currencyEuroValue);
                setBriefcaseBalance((user.balance.briefcaseBalance * currencyRubValue) / currencyEuroValue);
            } else {
                setBalance(user.balance.balance);
                setActive(user.balance.activeBalance);
                setBriefcaseBalance(user.balance.briefcaseBalance);
            }
        }
    }, [user, currency]);

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { lg: '1100px' },
            }}
        >
            <GrayWrapper>
                <Stack spacing="39px">
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        alignItems={{
                            sm: 'center',
                        }}
                        justifyContent="space-between"
                        spacing={{
                            sm: '14px',
                            xs: '5px',
                        }}
                    >
                        <Title>{t('Финансы')}</Title>
                        <CurrencyButtons currency={currency} onClick={setCurrency} />
                    </Stack>
                    <Stack
                        direction={{
                            md: 'row',
                        }}
                        spacing={{
                            md: '0',
                            xs: '30px',
                        }}
                        justifyContent="space-between"
                    >
                        <Stack
                            spacing={{
                                md: '50px',
                                xs: '20px',
                            }}
                        >
                            <ItemInfo
                                label={t('Общий Баланс')}
                                value={
                                    balance
                                        ? fCurrency(balance, generateLocale(currency), generateCurrency(currency))
                                        : generateEmptyPrefix(currency)
                                }
                            />
                            <ItemInfo
                                label={t('Активы')}
                                value={
                                    briefcaseBalance
                                        ? fCurrency(
                                              briefcaseBalance,
                                              generateLocale(currency),
                                              generateCurrency(currency)
                                          )
                                        : generateEmptyPrefix(currency)
                                }
                            />
                            <ItemInfo
                                label={t('Доступный Баланс')}
                                value={
                                    active
                                        ? fCurrency(active, generateLocale(currency), generateCurrency(currency))
                                        : generateEmptyPrefix(currency)
                                }
                            />
                        </Stack>
                        <Stack
                            spacing={{
                                md: '50px',
                                xs: '20px',
                            }}
                            sx={{
                                '> div': {
                                    alignItems: 'flex-end',
                                },
                            }}
                            textAlign={{
                                md: 'right',
                            }}
                            alignItems={{
                                md: 'end !important',
                            }}
                        >
                            <ItemInfo
                                label={t('Ожидаемая доходность')}
                                value={user?.balance?.gainPercents ? fPercent(demoCurrency) : '0%'}
                                showIcon
                            />
                            <ItemInfo
                                label={t('Доходность')}
                                value={user?.balance?.gainPercents ? fPercent(user?.balance?.gainPercents) : '0%'}
                            />
                            <Stack
                                direction={{
                                    sm: 'row',
                                }}
                                spacing={{
                                    sm: '30px',
                                    xs: '20px',
                                }}
                                sx={{ marginTop: { md: 'auto !important', xs: '30px !important' } }}
                            >
                                <Replenish transactionType="In">{t('Пополнить')}</Replenish>
                                <Replenish transactionType="Out">{t('Вывести')}</Replenish>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </GrayWrapper>
        </Box>
    );
};

export default AllAssets;
