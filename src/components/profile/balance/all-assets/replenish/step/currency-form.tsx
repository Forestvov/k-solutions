import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useSettingsContext } from 'context/settings/hooks/useSettingsContext';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import TitleStep from './title-step';
import CopyInput from './copy-input';
import Timer from './timer';

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
    const { t } = useTranslation('personal');

    const {
        settings: { timeProcess },
    } = useSettingsContext();

    const { getValues } = useFormContext();
    return (
        <Box
            sx={{
                margin: '0 auto',
                maxWidth: '630px',
            }}
        >
            <Stack spacing="30px" alignItems="center">
                <TitleStep>
                    {t('Пожалуйста, выполните заказ в установленный срок, иначе он будет аннулирован.')}
                </TitleStep>
                <QrCode src={getValues('qrCode')} />
                <CopyInput value={String(getValues('amountOut'))} prefix={generatePrefix(getValues('currencyToken'))} />
                <CopyInput value={getValues('contact')} />
                <Timer
                    timestamp={getValues('transactionDate')}
                    deadMin={Number(timeProcess)}
                    setStatus={() => console.log()}
                />
            </Stack>
        </Box>
    );
};
export default CurrencyForm;
