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
                padding: '100px 0',
            }}
        >
            <Container fixed>
                <Stack alignItems="flex-start" direction="row" justifyContent="space-between">
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
