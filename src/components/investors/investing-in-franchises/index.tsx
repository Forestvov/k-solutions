import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FranchiseTable from 'components/investors/investing-in-franchises/table';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    height: 100%;

    @media (max-width: 766px) {
        padding: 0;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`;

const Paragraph = styled.p`
    margin: 5px 0 5px 0;
    font-weight: 300;
    font-size: 20px;
    max-width: 819px;
    line-height: 26px;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
    @media (max-width: 766px) {
        font-size: 14px;
    }
`;

const Title = styled.h2`
    margin: 0;
    font-size: 48px;
    color: #373737;
    user-select: none;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 38px;
    }
    @media (max-width: 766px) {
        font-size: 28px;
    }
`;
const InvestInFranchise: FC = () => {
    const { t } = useTranslation('investor-page');

    return (
        <Box
            sx={{
                height: { lg: '750px', xl: '800px', md: '900px', sm: '1000px', xs: '1700px' },
                background: 'transparent',
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Content>
                    <div>
                        <Title>{t('Инвестиции во франшизы')}</Title>
                        <Paragraph>{t('Инвестиции во франшизы и покупка')}</Paragraph>
                    </div>
                    <FranchiseTable />
                </Content>
            </Inner>
        </Box>
    );
};

export default InvestInFranchise;
