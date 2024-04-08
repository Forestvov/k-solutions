import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Logo from 'assets/footer/logo.svg?react';
import Telegram from 'assets/socials/telegram.svg?react';
import Insta from 'assets/socials/insta.svg?react';
import Facebook from 'assets/socials/facebook.svg?react';

const SocialLink = styled.a`
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        opacity: 0.7;
    }
`;

const FooterDescription = () => {
    return (
        <Box sx={{ maxWidth: '413px' }}>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <Typography sx={{ margin: '20px 0 45px', color: '#444444' }}>
                The activities of are conducted within the obtained permits and are in full compliance with the obtained
                certificates.
            </Typography>
            <Stack spacing="30px" direction="row">
                <SocialLink href="#">
                    <Telegram />
                </SocialLink>
                <SocialLink href="#">
                    <Insta />
                </SocialLink>
                <SocialLink href="#">
                    <Facebook />
                </SocialLink>
            </Stack>
        </Box>
    );
};

export default FooterDescription;
