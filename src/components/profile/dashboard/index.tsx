import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import Icon from 'assets/pages/personal/dashboard.svg?react';

import Title from '../title';
import List from './list';

const TitleComponent = styled(Title)`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 30px;
    letter-spacing: 0;
`;

const Dashboard = () => {
    const { t } = useTranslation('personal');
    return (
        <Box
            sx={{
                padding: { lg: '30px 30px 42px', xs: '20px' },
                background: '#fff',
                borderRadius: '35px',
                marginBottom: '30px',
            }}
        >
            <TitleComponent>
                <Icon />
                <span>{t('Горячие предложения')}</span>
            </TitleComponent>
            <List />
        </Box>
    );
};

export default Dashboard;
