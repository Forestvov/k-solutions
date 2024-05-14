import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { fCurrency, fPercent } from 'helpers/number-format';
import { getCookie } from 'context/settings/cookie';
import { useCurrencyContext } from 'context/currency';
import { renderCurrency } from 'helpers/renderCurrency';

import Title from '../../title';
import GrayWrapper from '../gray-wrapper';
import CurrencyButtons from './currency-buttons';
import ItemInfo from './item-info';
import Replenish from './replenish';

const AllAssets = () => {
    const { t } = useTranslation('personal');

    const [demoCurrency, setDemoCurrency] = useState('0');

    const { selected, currency, setSelect } = useCurrencyContext();

    // @ts-ignore
    const { user } = useAuthContext();

    useEffect(() => {
        const demo = getCookie('rd');

        setDemoCurrency(demo ?? '0');
    }, []);

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
                        <CurrencyButtons currency={selected} onClick={setSelect} />
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
                                value={fCurrency(
                                    renderCurrency({
                                        usd: user.balance.balance,
                                        rub: currency.USD,
                                        eur: currency.EUR,
                                        currency: selected,
                                    })
                                )}
                            />
                            <ItemInfo
                                label={t('Активы')}
                                value={fCurrency(
                                    renderCurrency({
                                        usd: user.balance.briefcaseBalance,
                                        rub: currency.USD,
                                        eur: currency.EUR,
                                        currency: selected,
                                    })
                                )}
                            />
                            <ItemInfo
                                label={t('Доступный Баланс')}
                                value={fCurrency(
                                    renderCurrency({
                                        usd: user.balance.activeBalance,
                                        rub: currency.USD,
                                        eur: currency.EUR,
                                        currency: selected,
                                    })
                                )}
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
                                    lg: 'row',
                                }}
                                spacing={{
                                    xs: '20px',
                                }}
                                sx={{
                                    marginTop: { md: 'auto !important', xs: '30px !important' },
                                    '> button': {
                                        width: '100%',
                                    },
                                }}
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
