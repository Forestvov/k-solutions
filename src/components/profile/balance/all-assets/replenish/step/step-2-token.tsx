import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Selector from '../selector';
import type { FormState } from '../types';

import { useGetTransactions } from 'api/transaction';
import { getCoinPrice } from 'api/coin';

import TitleStep from './title-step';

import { PAYMENT_BANK } from './data';
import Input from 'components/profile/balance/all-assets/replenish/input';
import { fCurrency } from 'helpers/number-format';

const Notification = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #696969;
    display: flex;
    align-content: center;
`;

const Value = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #373737;
    display: flex;

    img {
        display: block;
        margin-right: 5px;
        margin-top: -2.5px;
    }
`;

const generatePrefix = (currentName: string) => {
    switch (currentName) {
        case 'BTC':
            return 'BTC ';
        case 'ETH':
            return 'ETH ';
        default:
            return '';
    }
};

interface Props {
    transactionType?: 'In' | 'Out';
}

const Step2Token = ({ transactionType }: Props) => {
    const { watch, setValue } = useFormContext<FormState>();

    const { data } = useGetTransactions('Token');

    useEffect(() => {
        if (data && data.length > 0) {
            const item = data[0];
            setValue('qrCode', item.qrCode);
            setValue('currencyToken', item.currentName);

            if (transactionType === 'In') {
                setValue('contact', item.value);
            }

            if (PAYMENT_BANK[item.currentName]) {
                setValue('amountIn', watch().amountOut);
            } else {
                const coin = item.currentName === 'TRC20' ? 'TUSD' : item.currentName;
                // @ts-ignore
                getCoinPrice(coin)
                    .then(({ data }) => setValue('amountIn', data.price))
                    .catch(() => {
                        setValue('amountIn', 1);
                    });
            }
        }
    }, [data]);

    return (
        <Box>
            <TitleStep>{transactionType === 'Out' ? 'Способ вывода' : 'Способ оплаты'}</TitleStep>
            <Box
                sx={{
                    width: {
                        sm: '450px',
                        xs: '100%',
                    },
                    margin: '30px auto 0',
                }}
            >
                <Stack spacing="30px">
                    <Selector name="currencyToken" isFirstStep items={data} />
                    {transactionType === 'Out' && <Input placeholder="Укажите адрес кошелька" name="contact" />}
                    <Input
                        placeholder={transactionType === 'In' ? 'Укажите сумму пополнения' : 'Укажите сумму вывода'}
                        name="amountOut"
                        type="number"
                        prefix={watch().currencyToken !== 'BTC' && watch().currencyToken !== 'ETH' ? '$' : ''}
                    />
                    {Number(watch().amountOut) > 0 && Number(watch().amountIn) > 0 && (
                        <Stack direction="row" alignItems="center" spacing="5px">
                            <Notification>Курс :</Notification>
                            <Value>
                                {watch().currencyToken !== 'BTC' && watch().currencyToken !== 'ETH'
                                    ? fCurrency(watch().amountOut)
                                    : `${watch().amountOut} ${generatePrefix(watch().currencyToken)}`}
                                = {fCurrency(Number(watch().amountIn) * Number(watch().amountOut))}
                            </Value>
                        </Stack>
                    )}
                    <Button
                        type="submit"
                        variant="dark-green"
                        disabled={watch().amountOut === 0 || watch().amountOut === ''}
                    >
                        Подтвердить
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default Step2Token;
