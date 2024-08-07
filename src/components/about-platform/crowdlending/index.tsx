import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { CrowdlendingCard } from 'components/about-platform/crowdlending/crowdlending-card';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;

    @media (max-width: 770px) {
        display: none;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 70px;
`;

const CrowdlendingSection: FC = () => {
    const { t } = useTranslation('about-platform');

    const cards = [
        {
            id: '1',
            title: t('croudInv'),
            text: t('croudInvText'),
            label: (
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.6875 35.375H2.5625C1.35438 35.375 0.375 36.3544 0.375 37.5625V59.4375C0.375 60.6456 1.35438 61.625 2.5625 61.625H15.6875C16.8956 61.625 17.875 60.6456 17.875 59.4375V37.5625C17.875 36.3544 16.8956 35.375 15.6875 35.375Z"
                        fill="#006838"
                    />
                    <path
                        d="M59.4375 17.875H46.3125C45.1044 17.875 44.125 18.8544 44.125 20.0625V59.4375C44.125 60.6456 45.1044 61.625 46.3125 61.625H59.4375C60.6456 61.625 61.625 60.6456 61.625 59.4375V20.0625C61.625 18.8544 60.6456 17.875 59.4375 17.875Z"
                        fill="#006838"
                    />
                    <path
                        d="M37.5625 0.375H24.4375C23.2294 0.375 22.25 1.35438 22.25 2.5625V59.4375C22.25 60.6456 23.2294 61.625 24.4375 61.625H37.5625C38.7706 61.625 39.75 60.6456 39.75 59.4375V2.5625C39.75 1.35438 38.7706 0.375 37.5625 0.375Z"
                        fill="#006838"
                    />
                </svg>
            ),
        },
        {
            id: '2',
            title: t('croudInv1'),
            text: t('croudInvText1'),
            label: (
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1150_16560)">
                        <path
                            d="M39.1016 0H37.0508V32.9492H70V30.8984C70 13.9355 56.0645 0 39.1016 0ZM10.6755 62.2244C16.0888 66.9648 23.1539 70 30.8984 70C47.8614 70 61.6602 56.0645 61.6602 39.1016V37.0508H35.8492L10.6755 62.2244ZM32.9492 8.33984H30.8984C24.2014 8.33984 18.0165 10.5148 12.9604 14.162L32.9492 34.1508V8.33984ZM9.78578 16.7873C3.85875 22.3979 0 30.3146 0 39.1016C0 46.8461 3.03516 53.9111 7.77561 59.3245L30.0493 37.0508L9.78578 16.7873Z"
                            fill="#006838"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1150_16560">
                            <rect width="70" height="70" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
    ];

    return (
        <Box
            sx={{
                paddingTop: { lg: '120px', xl: '90px', sm: '90px', xs: '70px' },
                paddingBottom: { lg: '120px', xl: '90px', sm: '90px', xs: '70px' },
                background: 'transparent',
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Content>
                    {cards.map((row: any) => (
                        <CrowdlendingCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default CrowdlendingSection;
