import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { addContact } from 'api/order-contact';

import validateSubscribe from 'helpers/validation/validateSubscribe';

interface Inputs {
    phoneNumber: string;
    module: string;
}

const Input = styled(InputMask)`
    border-radius: 10px;
    padding: 0 15px;
    border: 1px solid rgba(32, 131, 109, 0.5);
    max-width: 440px;
    flex-grow: 1;
    background: transparent;
    font-size: 1rem;
    outline: none;
    height: 43px;
    line-height: 43px;
    transition: opacity 400ms;

    @media (min-width: 768px) {
        height: 59px;
        line-height: 59px;
    }

    &::placeholder {
        color: rgba(89, 89, 89, 0.4);
    }

    &:disabled {
        opacity: 0.7;
    }
`;

const Form = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<boolean | string>(false);
    const [load, setLoad] = useState(false);
    const resolver = yupResolver(validateSubscribe);

    const { t } = useTranslation('form');

    const { control, handleSubmit, reset } = useForm<Inputs>({
        mode: 'onChange',
        resolver,
        defaultValues: {
            phoneNumber: '',
            module: 'home-page',
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
        <Stack spacing="25px" sx={{ marginBottom: '40px' }}>
            <Stack
                component="form"
                spacing={{ sm: '50px', xs: '25px' }}
                direction={{ sm: 'row', xs: 'column' }}
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
                <Button variant="green" type="submit" disabled={load} sx={{ padding: { xs: '12px 40px' } }}>
                    {t('Заказать Звонок')}
                </Button>
            </Stack>
            {success && <Typography variant="body1">{t('Заявка успешно отправлена')}</Typography>}
            {error && <Typography variant="body1">{error}</Typography>}
        </Stack>
    );
};

export default Form;
