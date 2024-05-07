import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FranchiseTable from 'components/investors/investing-in-franchises/table';

const Inner = styled(Container)`
    height: 100%;

    @media (max-width: 766px) {
        padding: 0;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
    margin: 0 auto;
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
    return (
        <Box
            sx={{
                height: { lg: '950px', xl: '850px', sm: '1200px', xs: '1145px' },
                background: '#F6F7F8',
                overflow: 'hidden',
                marginBottom: { xs: '200px', sm: '130px', md: '150px' },
            }}
        >
            <Inner fixed>
                <Content>
                    <div>
                        <Title>Инвестиции во франшизы vs классический франчайзинг</Title>
                        <Paragraph>
                            Инвестиции во франшизы и покупка франшизы — два различных подхода к франчайзингу, каждый из
                            которых имеет свои особенности, преимущества и риски. Рассмотрим ключевые отличия этих
                            подходов.
                        </Paragraph>
                    </div>
                    <FranchiseTable />
                </Content>
            </Inner>
        </Box>
    );
};

export default InvestInFranchise;
