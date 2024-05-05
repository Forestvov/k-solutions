// import { useFormContext } from 'react-hook-form';
// import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TotalIcon from 'assets/payer/card-total.svg?react';

// import type { FormState } from '../types';
import Description from './description';
import Input from 'components/profile/balance/all-assets/replenish/input';

interface Props {
    onPrev?: VoidFunction;
}

// const Label = styled.div`
//     font-size: 14px;
//     line-height: 20px;
//     color: #667085;
// `;
//
// const Total = styled.div`
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 28px;
//     color: #101828;
// `;

const BankCardForm = ({ onPrev }: Props) => {
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
                            label="Сумма пополнения"
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
                        <Input isBankCard name="nameCart" placeholder="Olivia Rhye" label="Имя владельца карты" />
                        <Input isBankCard name="dateCart" placeholder="06 / 2024" mask="99 / 9999" label="Дата" />
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
                            label="Номер карты"
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
                        type="button"
                        sx={{
                            border: '1px solid #D0D5DD',
                            color: '#344054',
                            background: 'transparent',
                            height: '49px',
                            width: {
                                sm: '50%',
                                xs: '100%',
                            },
                            borderRadius: '8px',

                            '&:hover': {
                                background: '#1E2021',
                                color: '#fff',
                            },
                        }}
                        fullWidth
                        onClick={onPrev}
                    >
                        Отменить
                    </Button>
                    <Button
                        sx={{
                            width: {
                                sm: '50%',
                                xs: '100%',
                            },
                            height: '49px',
                            borderRadius: '8px',
                        }}
                        variant="green"
                        fullWidth
                        type="submit"
                    >
                        Оплатить
                    </Button>
                </Stack>
                <Description>
                    При переводе учитывайте комиссию вашего банка, так же комиссию за международную операцию 6%.
                </Description>
            </Stack>
        </Box>
    );
};

export default BankCardForm;
