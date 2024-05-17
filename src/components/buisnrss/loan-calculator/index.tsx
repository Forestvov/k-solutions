import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Calculator } from 'components/buisnrss/loan-calculator/calculator';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 70px;
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 2rem;
    }
`;

const CalculatorSection: FC = () => {
    const { t } = useTranslation('business-page');

    return (
        <Box
            sx={{
                background: 'transparent',
                paddingTop: { lg: '180px', xl: '120px', sm: '120px', xs: '80px' },
                paddingBottom: { lg: '180px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner>
                <Title>{t('Калькулятор займа')}</Title>
                <Content>
                    <Calculator />
                </Content>
            </Inner>
        </Box>
    );
};

export default CalculatorSection;
