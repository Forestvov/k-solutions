import { useEffect } from 'react';
import Button from '@mui/material/Button';

import { getCoinPrice } from 'api/coin';
import { useGetStaticCurse, useGetTransactions } from 'api/transaction';

import Description from './description';
import Selector from '../selector';
import Input from '../input';
import GetterInput from './getter-input';
import { PAYMENT_BANK } from './data';
import { useFormContext } from 'react-hook-form';

const P2PForm = () => {
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
            <Selector name="currencyToken" label="Отдаете" items={data} />
            <Input placeholder="0000 0000 0000 0000" mask="9999 9999 9999 9999" label="Номер карты" name="numberCart" />
            <Input placeholder="Name Surname" label="Имя владельца карты" name="nameCart" />
            <Input
                placeholder="00.00"
                label="Сумма ₽"
                prefix="₽"
                type="number"
                name="amountIn"
                handleChange={(e) => setValue('amountOut', Number(e) / watch().staticCurse)}
            />
            <GetterInput />
            <Input
                placeholder="00.00"
                label="Сумма $"
                prefix="$"
                type="number"
                name="amountOut"
                handleChange={(e) => setValue('amountIn', Number(e) * watch().staticCurse)}
            />
            <div>
                <Button variant="dark-green" type="submit" fullWidth>
                    Перейти к оплате
                </Button>
                <Description>
                    Выплата производится в автоматическом режиме по регламенту пользовательского соглашения.
                </Description>
            </div>
        </>
    );
};

export default P2PForm;
