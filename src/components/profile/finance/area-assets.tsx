import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import styled from '@emotion/styled';
import ProfilechartArea from 'components/profile/finance/profilechart-area';
import { useGetAnaliticGain } from 'api/brief';
import type { AnaliticGainView } from 'types/brief';
import type { CompanyType } from 'types/company';

const Area = styled(ProfilechartArea)`
    max-width: 720px;
    width: auto;
    flex: 0 0 auto;

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

    const [fromDate, setFromDate] = useState<Dayjs | null>(null);
    const [toDate, setToDate] = useState<Dayjs | null>(null);

    const { data } = useGetAnaliticGain({
        fromDate,
        toDate,
    });

    const generateFranchise = (data: AnaliticGainView[] | undefined, companyType: CompanyType): number[] => {
        if (!data || data.length === 0) return [];

        return data.filter((item) => item.companyType === companyType).map((item) => Number(item.amount.toFixed(2)));
    };

    return (
        <Area
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            title={t('Ежемесячные доходы')}
            chart={{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    {
                        data: [
                            {
                                name: t('Компании'),
                                data: generateFranchise(data, 'Company'),
                            },
                            {
                                name: t('Франшизы'),
                                data: generateFranchise(data, 'Franchise'),
                            },
                        ],
                    },
                ],
            }}
        />
    );
};

export default AreaAssets;
