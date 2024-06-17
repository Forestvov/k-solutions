import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import { useGetAnaliticActive } from 'api/brief';

import { useCurrencyContext } from 'context/currency';
import { renderCurrency } from 'helpers/renderCurrency';

import ProfilechartDonut from './profilechart-donut';
import ProfilechartRadial from './profilechart-radial';
import BlockSkeleton from './block-skeleton';

const Assets = () => {
    const { t } = useTranslation('personal');

    const { data, dataLoading } = useGetAnaliticActive();

    const { selected, currency } = useCurrencyContext();

    const getSum = () => {
        if (data) {
            return data.analiticActiveGainView.reduce((sum, current) => {
                return sum + current.amount;
            }, 0);
        } else {
            return 0;
        }
    };

    // @ts-ignore
    if (!dataLoading && !data?.analiticActiveView.length && !data?.analiticActiveGainView.length) return null;

    const gainActiveTotal = renderCurrency({
        usd: getSum(),
        rub: currency.USD,
        eur: currency.EUR,
        currency: selected,
    });

    return (
        <Stack
            direction={{
                sm: 'row',
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
                                total={gainActiveTotal}
                                chart={{
                                    series: data.analiticActiveGainView.map((item) => ({
                                        label: item.companyType === 'Company' ? t('Компания') : t('Франшиза'),
                                        value:
                                            item.amount > 0
                                                ? Number(
                                                      (
                                                          (renderCurrency({
                                                              usd: item.amount,
                                                              rub: currency.USD,
                                                              eur: currency.EUR,
                                                              currency: selected,
                                                          }) /
                                                              gainActiveTotal) *
                                                          100
                                                      ).toFixed(2)
                                                  )
                                                : 0,
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
