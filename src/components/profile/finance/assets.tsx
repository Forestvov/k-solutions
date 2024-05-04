import Stack from '@mui/material/Stack';

import { useGetAnaliticActive } from 'api/brief';

import ProfilechartDonut from 'components/profile/finance/profilechart-donut';
import ProfilechartRadial from 'components/profile/finance/profilechart-radial';
import BlockSkeleton from 'components/profile/finance/block-skeleton';

const Assets = () => {
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
                        <ProfilechartDonut
                            title="Активы"
                            chart={{
                                series: data.analiticActiveView.map((item) => ({
                                    label: item.companyName,
                                    value: item.amount,
                                })),
                            }}
                        />
                        <ProfilechartRadial
                            title="Доходы"
                            total={getSum()}
                            chart={{
                                series: data.analiticActiveGainView.map((item) => ({
                                    label: item.companyType === 'Company' ? 'Компания' : 'Франшиза',
                                    value: item.amount,
                                })),
                            }}
                        />
                    </>
                )
            )}
        </Stack>
    );
};

export default Assets;
