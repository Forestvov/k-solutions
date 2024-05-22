import type { AnaliticForecastItem } from 'types/brief';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import { useGetForecast } from 'api/brief';

import ProfilechartArea from './profilechart-area';

const Area = styled(ProfilechartArea)`
    width: auto;
    flex: 0 0 auto;

    @media (min-width: 1668px) {
        width: 100%;
        max-width: 650px;
    }

    @media only screen and (min-width: 1280px) and (max-device-width: 1668px) {
        min-width: 500px;
    }

    @media (max-width: 768px) {
        > div:first-of-type {
            margin-bottom: 20px;
        }
        > div:nth-of-type(2) {
            margin: 0 -20px !important;
        }
    }
`;

const AreaAssets = () => {
    const { t } = useTranslation('personal');

    const { data } = useGetForecast();

    const generateData = (data: AnaliticForecastItem[] | undefined): number[] => {
        if (!data || data.length === 0) return [];

        return data.map((item) => Number(item.amount.toFixed(2)));
    };

    return (
        <Area
            title={t('Прогнозируемый доход')}
            chart={{
                categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    {
                        data: [
                            {
                                name: t('Компании'),
                                data: generateData(data?.companyForecastList),
                            },
                            {
                                name: t('Франшизы'),
                                data: generateData(data?.franchiseForecastList),
                            },
                        ],
                    },
                ],
            }}
        />
    );
};

export default AreaAssets;
