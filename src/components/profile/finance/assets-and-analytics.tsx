import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Title from '../title';

import ProfilechartDonut from './profilechart-donut';
import ProfilechartRadial from './profilechart-radial';
import ProfilechartArea from 'components/profile/finance/profilechart-area';

const TitleStyled = styled(Title)`
    margin: 0 0 54px;
`;

const Wrapper = styled(Stack)`
    flex-direction: column;

    > div + div {
        margin-top: 40px;
    }

    @media (min-width: 1800px) {
        flex-direction: row;

        > div + div {
            margin-left: 60px;
        }
    }
`;

const Area = styled(ProfilechartArea)`
    max-width: 100%;

    @media (max-width: 768px) {
        > div:first-of-type {
            margin-bottom: 20px;
        }
        > div:nth-child(2) {
            margin: 0 -20px !important;
        }
    }

    @media (min-width: 1800px) {
        max-width: 720px;
    }
`;

const AssetsAndAnalytics = () => {
    return (
        <div>
            <TitleStyled>Активы и аналитика</TitleStyled>
            <Wrapper justifyContent="space-between">
                <Stack
                    direction={{
                        md: 'row',
                    }}
                    spacing={{
                        xs: '30px',
                        md: '60px',
                    }}
                >
                    <ProfilechartDonut
                        title="Активы"
                        chart={{
                            series: [
                                { label: 'Qlower', value: 12244 },
                                { label: 'FarmTech', value: 53345 },
                                { label: 'Mall', value: 44313 },
                                { label: 'Milling', value: 78343 },
                            ],
                        }}
                    />
                    <ProfilechartRadial
                        title="Доходы"
                        total={2324}
                        chart={{
                            series: [
                                { label: 'Компании', value: 90 },
                                { label: 'Франшизы', value: 10 },
                            ],
                        }}
                    />
                </Stack>
                <Area
                    sx={{
                        flex: '0 0 auto',
                        width: '100%',
                    }}
                    title="Ежемесячные доходы"
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
                                year: '2019',
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
                            {
                                year: '2020',
                                data: [
                                    {
                                        name: 'Компании',
                                        data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                                    },
                                    {
                                        name: 'Франшизы',
                                        data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                                    },
                                ],
                            },
                        ],
                    }}
                />
            </Wrapper>
        </div>
    );
};

export default AssetsAndAnalytics;
