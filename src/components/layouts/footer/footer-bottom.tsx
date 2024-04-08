import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FooterLink from './footer-link';

const FooterBottom = () => {
    return (
        <Box paddingTop="58px" marginTop="23px" borderTop="1px solid rgba(58, 58, 58, 0.3)">
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing="40px">
                    <FooterLink to="#">Private Policy</FooterLink>
                    <FooterLink to="#">AML Policy</FooterLink>
                </Stack>
                <Typography color="#444444">Copyright ©2024, K SOLUTIONS Ltd</Typography>
            </Stack>
        </Box>
    );
};

export default FooterBottom;
