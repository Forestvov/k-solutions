import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import TitleStep from './title-step';
import CopyInput from './copy-input';
import Timer from './timer';
import { useFormContext } from 'react-hook-form';

const QrCode = styled.img`
    height: 317px;
    width: 317px;
    display: block;
`;

const generatePrefix = (token: string) => {
    switch (token) {
        case 'BTC':
            return 'BTC';
        case 'ETH':
            return 'ETH';
        case 'TRC20':
            return 'USDT';
        default:
            return 'USD';
    }
};

const CurrencyForm = () => {
    const { getValues } = useFormContext();
    return (
        <Box
            sx={{
                margin: '0 auto',
                maxWidth: '630px',
            }}
        >
            <Stack spacing="30px" alignItems="center">
                <TitleStep>Пожалуйста, выполните заказ в установленный срок, иначе он будет аннулирован.</TitleStep>
                <QrCode src={getValues('qrCode')} />
                <CopyInput value={String(getValues('amountOut'))} prefix={generatePrefix(getValues('currencyToken'))} />
                <CopyInput value={getValues('contact')} />
                <Timer timestamp={getValues('transactionDate')} deadMin={20} setStatus={() => console.log()} />
            </Stack>
        </Box>
    );
};
export default CurrencyForm;
