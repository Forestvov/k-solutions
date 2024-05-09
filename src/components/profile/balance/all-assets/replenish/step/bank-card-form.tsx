import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TotalIcon from 'assets/payer/card-total.svg?react';

import Description from './description';
import Input from 'components/profile/balance/all-assets/replenish/input';

interface Props {
    transactionType?: 'In' | 'Out';
}

const BankCardForm = ({ transactionType }: Props) => {
    const { t } = useTranslation('personal');

    return (
        <Box
            sx={{
                margin: '0 auto',
                maxWidth: '480px',
                borderRadius: '12px',
                background: '#fff',
                padding: '24px',
                boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
            }}
        >
            <Stack spacing="20px">
                <Stack direction="row" alignItems="center" spacing="15px">
                    <TotalIcon />
                    <Box>
                        <Input
                            isBankCard
                            placeholder="00.00"
                            label={transactionType === 'Out' ? t('Сумма вывода') : t('Сумма пополнения')}
                            prefix="$"
                            type="number"
                            name="amountIn"
                        />
                    </Box>
                </Stack>
                <Stack spacing="16px">
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        spacing={{
                            xs: '16px',
                        }}
                    >
                        <Input isBankCard name="nameCart" placeholder="Olivia Rhye" label={t('Имя владельца карты')} />
                        <Input isBankCard name="dateCart" placeholder="06 / 2024" mask="99 / 9999" label={t('Дата')} />
                    </Stack>
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        spacing={{
                            xs: '16px',
                        }}
                    >
                        <Input
                            isBankCard
                            name="numberCart"
                            placeholder="0000 0000 0000 0000"
                            mask="9999 9999 9999 9999"
                            label={t('Номер карты')}
                        />
                        <Input isBankCard name="cvvCart" placeholder="777" type="password" label="CVV" />
                    </Stack>
                </Stack>
                <Stack
                    direction={{
                        sm: 'row',
                    }}
                    spacing={{
                        xs: '12px',
                    }}
                >
                    <Button
                        sx={{
                            height: '49px',
                            borderRadius: '8px',
                        }}
                        variant="green"
                        fullWidth
                        type="submit"
                    >
                        {transactionType === 'Out' ? t('Вывести') : t('Оплатить')}
                    </Button>
                </Stack>
                <Description>
                    {t('При переводе учитывайте комиссию вашего банка, так же комиссию за международную операцию 6%.')}
                </Description>
            </Stack>
        </Box>
    );
};

export default BankCardForm;
