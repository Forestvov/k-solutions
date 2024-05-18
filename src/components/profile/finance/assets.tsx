import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import { useGetAnaliticActive } from 'api/brief';

import { useCurrencyContext } from 'context/currency';

import ProfilechartDonut from './profilechart-donut';
import ProfilechartRadial from './profilechart-radial';
import BlockSkeleton from './block-skeleton';
import { renderCurrency } from 'helpers/renderCurrency';

const Assets = () => {
    const { t } = useTranslation('personal');

    const { data, dataLoading } = useGetAnaliticActive();

    const { selected, currency } = useCurrencyContext();

    const getSum = () => {
        if (data) {
            return data.analiticActiveGainView.reduce((sum, current) => {
                return renderCurrency({
                    usd: sum + current.amount,
                    rub: currency.USD,
                    eur: currency.EUR,
                    currency: selected,
                });
            }, 0);
        } else {
            return 0;
        }
    };

    // @ts-ignore
    if (!dataLoading && !data?.analiticActiveView.length && !data?.analiticActiveGainView.length) return null;

    return (
        <Stack
            direction={{
                md: 'row',
            }}
            sx={{
                width: '100%',
            }}
            spacing={{
                lg: '60px',
            }}
        >
            {dataLoading ? (
                <BlockSkeleton />
            ) : (
                data && (
                    <>
                        {data.analiticActiveView.length > 0 && (
                            <ProfilechartDonut
                                title={t('Активы')}
                                chart={{
                                    series: data.analiticActiveView.map((item) => ({
                                        label: item.companyName,
                                        value: renderCurrency({
                                            usd: item.amount,
                                            rub: currency.USD,
                                            eur: currency.EUR,
                                            currency: selected,
                                        }),
                                    })),
                                }}
                            />
                        )}
                        {data.analiticActiveGainView.length > 0 && (
                            <ProfilechartRadial
                                title={t('Доходы')}
                                total={getSum()}
                                chart={{
                                    series: data.analiticActiveGainView.map((item) => ({
                                        label: item.companyType === 'Company' ? t('Компания') : t('Франшиза'),
                                        value: item.amount,
                                    })),
                                }}
                            />
                        )}
                    </>
                )
            )}
        </Stack>
    );
};

export default Assets;
