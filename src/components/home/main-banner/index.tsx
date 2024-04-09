import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Logo from 'assets/pages/home/banner-logo.svg?react';
import Schedule from 'assets/pages/home/banner-schedule.svg?react';

import Form from './form';
import Image from './image';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Paragraph = styled.p`
    margin: 40px 0 88px;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 8px;
`;

const MainBanner: FC = () => {
    return (
        <Box
            sx={{
                height: 950,
                background: '#F6F7F8',
                paddingTop: '229px',
                overflow: 'hidden',
                marginBottom: '150px',
            }}
        >
            <Inner>
                <Logo />
                <Paragraph>
                    Интернет-сервис, на котором можно инвестировать деньги в бизнес или получить финансирование для
                    компании !
                </Paragraph>
                <Form />
                <Schedule />
                <Image />
            </Inner>
        </Box>
    );
};

export default MainBanner;
