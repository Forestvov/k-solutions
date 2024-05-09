import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import validateSubscribe from 'helpers/validation/validateSubscribe';

import { addContact } from 'api/order-contact';
import { useTranslation } from 'react-i18next';

interface Inputs {
    phoneNumber: string;
    module: string;
}

const Input = styled(InputMask)`
    border-radius: 10px;
    padding: 0 15px;
    border: 1px solid rgba(32, 131, 109, 0.5);
    width: 100%;
    flex-grow: 1;
    background: transparent;
    font-size: 1rem;
    line-height: 49px;
    outline: none;
    height: 49px;

    &::placeholder {
        color: rgba(89, 89, 89, 0.4);
    }

    @media (min-width: 768px) {
        height: 59px;
        line-height: 59px;
        max-width: 477px;
    }
`;

const SubscribeForm = () => {
    const { t } = useTranslation('form');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<boolean | string>(false);
    const [load, setLoad] = useState(false);

    const resolver = yupResolver(validateSubscribe);

    const { control, handleSubmit, reset } = useForm<Inputs>({
        mode: 'onChange',
        resolver,
        defaultValues: {
            phoneNumber: '',
            module: 'personal-page',
        },
    });

    const onSubmit = async (data: Inputs) => {
        setSuccess(false);
        setError(false);
        setLoad(true);

        try {
            await addContact(data);
            setSuccess(true);
        } catch (e) {
            // @ts-ignore
            if (e?.message === 'This number is existed') {
                setError(t('Заявка уже отправлена'));
            }
        }

        await setLoad(false);
        await reset();
    };
    return (
        <Stack spacing="20px">
            <Stack
                direction={{ sm: 'row' }}
                spacing={{ sm: '30px', xs: '20px' }}
                alignItems={{ sm: 'center' }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { ref, onChange, value } }) => (
                        <Input
                            ref={ref}
                            mask="+9 (999) 999-99-99"
                            value={value}
                            onChange={onChange}
                            placeholder={t('Введите номер телефона')}
                        />
                    )}
                />
                <Button variant="green" type="submit" disabled={load} sx={{ width: { sm: '278px' }, flex: '0 0 auto' }}>
                    {t('Заказать Консультацию')}
                </Button>
            </Stack>
            {success && <Typography variant="body1">{t('Заявка успешно отправлена')}</Typography>}
            {error && <Typography variant="body1">{error}</Typography>}
        </Stack>
    );
};

export default SubscribeForm;
