import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import { useGetAnaliticActive } from 'api/brief';

import ProfilechartDonut from 'components/profile/finance/profilechart-donut';
import ProfilechartRadial from 'components/profile/finance/profilechart-radial';
import BlockSkeleton from 'components/profile/finance/block-skeleton';

const Assets = () => {
    const { t } = useTranslation('personal');

    const { data, dataLoading } = useGetAnaliticActive();

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
    if (!dataLoading && !data.analiticActiveView.length && !data.analiticActiveGainView.length) return null;

    return (
        <Stack
            direction={{
                md: 'row',
            }}
            sx={{
                width: '100%',
            }}
            spacing={{
                xs: '30px',
                md: '60px',
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
                                        value: item.amount,
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
