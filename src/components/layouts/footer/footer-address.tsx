import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const Value = styled.span`
    color: #006838;
    font-weight: 600;
    text-decoration: underline;
    line-height: 24px;
`;

const FooterAddress = () => {
    return (
        <Stack spacing="44px" maxWidth={354} flexGrow={1}>
            <Box>
                <Typography sx={{ color: '#444444', fontSize: '1.25rem' }}>
                    Адрес: <Value>45 Daws Lane, London, England, NW7 4SD</Value>
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#444444', fontSize: '1.25rem' }}>
                    Регистрационный номер компании: <Value>08051408</Value>
                </Typography>
            </Box>
        </Stack>
    );
};

export default FooterAddress;
