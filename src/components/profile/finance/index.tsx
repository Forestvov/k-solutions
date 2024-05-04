import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Title from 'components/profile/title';

import WhiteWrapper from '../white-wrapper';
import AssetsAndAnalytics from './assets-and-analytics';
import FinanceIncome from './finance-income';
import ProfilechartDynamicsArea from './profilechart-dynamics-area';
import ProfilechartAnalytics from './profilechart-analytics';
import List from './list';

const TitleStyled = styled(Title)`
    margin: 0 0 30px;
`;

const Finance = () => {
    return (
        <WhiteWrapper>
            <Stack
                spacing={{
                    xl: '120px',
                    sm: '60px',
                    xs: '30px',
                }}
            >
                <List />
                <AssetsAndAnalytics />
                <div>
                    <FinanceIncome />
                </div>
                <div>
                    <TitleStyled>Аналитика KSOLUITONS</TitleStyled>
                    <Stack
                        direction={{
                            lg: 'row',
                        }}
                        justifyContent="space-between"
                    >
                        <ProfilechartAnalytics
                            title="Динамика наших активов"
                            chart={{
                                series: [
                                    { label: 'America', value: 4344 },
                                    { label: 'Asia', value: 5435 },
                                    { label: 'Europe', value: 1443 },
                                    { label: 'Africa', value: 4443 },
                                ],
                            }}
                        />
                        <ProfilechartDynamicsArea
                            sx={{
                                maxWidth: {
                                    lg: '1100px',
                                    xs: '100%',
                                },
                                flex: '0 0 auto',
                                width: '100%',
                                marginTop: '25px',
                            }}
                            title="Динамика наших активов "
                            chart={{
                                categories: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec',
                                ],
                                series: [
                                    {
                                        data: [
                                            {
                                                name: 'Компании',
                                                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                                            },
                                            {
                                                name: 'Франшизы',
                                                data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                                            },
                                        ],
                                    },
                                ],
                            }}
                        />
                    </Stack>
                </div>
            </Stack>
        </WhiteWrapper>
    );
};
export default Finance;
