import type { FC } from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Logo from 'assets/pages/home/KSOLUTIONS.svg?react';

import Item from './item';

const LogoIcon = styled(Logo)`
    height: auto;
    width: 170px;

    @media (min-width: 768px) {
        width: 226px;
    }

    @media (min-width: 1024px) {
        width: 257px;
        height: 32px;
    }
`;

const Financing: FC = () => {
    return (
        <Box sx={{ marginBottom: { xs: '100px', sm: '130px', md: '150px' } }}>
            <Container fixed>
                <Typography variant="home-h2" component="h2" sx={{ maxWidth: '855px' }}>
                    Именно поэтому, получить финансирование через&nbsp;&nbsp;
                    <LogoIcon />
                </Typography>
                <Box
                    sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}
                    gap={{ xs: '30px', md: '40px' }}
                >
                    <Item
                        title="Намного проще, чем в банке"
                        description="Решение о финансировании по двум документам за 3 минуты в любое время 24/7"
                        label="Решение за 3 минуты"
                        value="24/7"
                    />
                    <Item
                        title="Гораздо дешевле, чем в микрозаймах"
                        description="Ставка 18,1% доступна для компаний с рейтингом 1"
                        label="Ставка от"
                        value="18,1%"
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Financing;