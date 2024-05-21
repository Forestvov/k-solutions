import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { MechanicsWorkCard } from 'components/about-platform/mechanics-work/mechanics-work-card';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 40px;

    @media (max-width: 1280px) {
        width: 100%;
        justify-content: center;
    }
`;

const Title = styled.h2`
    font-size: 38px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 32px;
        line-height: 50px;
    }
`;

const MechanicsWorkSection: FC = () => {
    const { t } = useTranslation('about-platform');

    const cards = [
        {
            id: '1',
            title: 'p2p',
            text: t('mehWorkCardTitle'),
        },
        {
            id: '2',
            title: 'p2b',
            text: t('mehWorkCardTitle1'),
        },
        {
            id: '3',
            title: 'b2b',
            text: t('mehWorkCardTitle2'),
        },
    ];
    return (
        <Box
            sx={{
                background: '#F6F7F8',
                paddingTop: { lg: '120px', xl: '90px', sm: '90px', xs: '70px' },
                paddingBottom: { lg: '120px', xl: '90px', sm: '90px', xs: '70px' },
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Title>{t('mehWorkTitle')}</Title>
                <Content>
                    {cards.map((row: any) => (
                        <MechanicsWorkCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default MechanicsWorkSection;
