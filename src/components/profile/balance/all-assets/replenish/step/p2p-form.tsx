import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';

import { getCoinPrice } from 'api/coin';
import { useGetStaticCurse, useGetTransactions } from 'api/transaction';

import Description from './description';
import Selector from '../selector';
import Input from '../input';
import GetterInput from './getter-input';
import { PAYMENT_BANK } from './data';
import { useFormContext } from 'react-hook-form';

interface Props {
    transactionType?: 'In' | 'Out';
}

const formateCurrency = (num: number) => {
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(2);
};

const P2PForm = ({ transactionType }: Props) => {
    const { t } = useTranslation('personal');

    const { setValue, watch } = useFormContext();

    const { data } = useGetTransactions('p2p');
    const { curse } = useGetStaticCurse('TRC20');

    useEffect(() => {
        if (data && data.length > 0) {
            const item = data[0];
            setValue('qrCode', item.qrCode);
            setValue('contact', item.value);
            setValue('currencyToken', item.currentName);

            if (PAYMENT_BANK[item.currentName]) {
                setValue('amountIn', watch().amountOut);
            } else {
                const coin = item.currentName === 'TRC20' ? 'TUSD' : item.currentName;
                // @ts-ignore
                getCoinPrice(coin).then(({ data }) => setValue('amountIn', data.price));
            }
        }
    }, [data]);

    useEffect(() => {
        if (curse && curse.length > 0) {
            const item = curse[0];
            setValue('commission', item.commission);
            setValue('staticCurse', item.staticCurse);
        }
    }, [curse]);

    return (
        <>
            <Selector
                name="currencyToken"
                label={transactionType === 'Out' ? t('Получаете') : t('Отдаете')}
                items={data}
            />
            <Input
                placeholder="0000 0000 0000 0000"
                mask="9999 9999 9999 9999"
                label={t('Номер карты')}
                name="numberCart"
            />
            <Input placeholder="Name Surname" label={t('Имя владельца карты')} name="nameCart" />
            <Input
                placeholder="00.00"
                label={t('Сумма ₽')}
                prefix="₽"
                type="number"
                name="amountIn"
                handleChange={(e) => setValue('amountOut', formateCurrency(Number(e) / watch().staticCurse))}
            />
            {transactionType !== 'Out' && <GetterInput />}
            <Input
                placeholder="00.00"
                label={t('Сумма $')}
                prefix="$"
                type="number"
                name="amountOut"
                handleChange={(e) => setValue('amountIn', formateCurrency(Number(e) * watch().staticCurse))}
            />
            <div>
                <Button variant="dark-green" type="submit" fullWidth>
                    {transactionType === 'Out' ? t('Перейти к выводу') : t('Перейти к оплате')}
                </Button>
                <Description>
                    {t('Выплата производится в автоматическом режиме по регламенту пользовательского соглашения.')}
                </Description>
            </div>
        </>
    );
};

export default P2PForm;
