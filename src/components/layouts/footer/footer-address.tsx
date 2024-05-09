import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const Value = styled.a`
    color: #006838;
    font-weight: 600;
    text-decoration: underline;
    line-height: 24px;
`;

const FooterAddress = () => {
    const { t } = useTranslation('main-navigation');

    return (
        <Stack spacing="44px" maxWidth={354} flexGrow={1}>
            <Box>
                <Typography sx={{ color: '#444444', fontSize: { lg: '1.25rem', xl: '1.125rem' } }}>
                    {t('address')}:{' '}
                    <Value href="https://maps.app.goo.gl/eUqMAAxuZvmBhzrbA" target="_blank">
                        45 Daws Lane, London, England, NW7 4SD
                    </Value>
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#444444', fontSize: { lg: '1.25rem', xl: '1.125rem' } }}>
                    {t('regNumber')}:{' '}
                    <Value
                        href="https://find-and-update.company-information.service.gov.uk/company/08051408"
                        target="_blank"
                    >
                        08051408
                    </Value>
                </Typography>
            </Box>
        </Stack>
    );
};

export default FooterAddress;
