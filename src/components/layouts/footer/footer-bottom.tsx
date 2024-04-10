import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FooterLink from './footer-link';

const FooterBottom = () => {
    return (
        <Box paddingTop={{ sm: '58px', xs: '30px' }} marginTop="23px" borderTop="1px solid rgba(58, 58, 58, 0.3)">
            <Stack direction={{ sm: 'row' }} spacing={{ sm: '0', xs: '10px' }} justifyContent="space-between">
                <Stack direction="row" spacing="40px">
                    <FooterLink to="#">Private Policy</FooterLink>
                    <FooterLink to="#">AML Policy</FooterLink>
                </Stack>
                <Typography fontSize={{ xs: '1rem', sm: '1.125rem', lg: '1.25rem' }} color="#444444">
                    Copyright ©2024, K SOLUTIONS Ltd
                </Typography>
            </Stack>
        </Box>
    );
};

export default FooterBottom;
