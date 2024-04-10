import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import FooterDescription from './footer-description';
import FooterNavigation from './footer-navigation';
import FooterAddress from './footer-address';
import FooterBottom from './footer-bottom';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                background: '#F6F7F8',
                padding: {
                    xs: '60px 0',
                    xl: '70px 0',
                    lg: '100px 0',
                },
            }}
        >
            <Container fixed>
                <Stack
                    alignItems="flex-start"
                    direction={{ xs: 'column', xl: 'row' }}
                    spacing={{ xs: '40px', xl: '0' }}
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <FooterDescription />
                    <FooterNavigation />
                    <FooterAddress />
                </Stack>
                <FooterBottom />
            </Container>
        </Box>
    );
};

export default Footer;
