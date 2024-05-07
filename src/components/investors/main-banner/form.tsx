import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { addContact } from 'api/order-contact';

import validateSubscribe from 'helpers/validation/validateSubscribe';
import { useState } from 'react';

interface Inputs {
    phoneNumber: string;
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

const Paragraph = styled.p`
    margin: 30px 0 45px;
    font-weight: 300;
    font-size: 1rem;
    line-height: 26px;

    @media (min-width: 768px) {
        font-size: 1.125rem;
        line-height: 30px;
        margin: 30px 0 76px;
    }

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }
`;

const Form = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<boolean | string>(false);
    const [load, setLoad] = useState(false);
    const resolver = yupResolver(validateSubscribe);

    const { control, handleSubmit, reset } = useForm<Inputs>({
        mode: 'onChange',
        resolver,
        defaultValues: {
            phoneNumber: '',
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
                setError('Заявка уже отправлена');
            }
        }

        await setLoad(false);
        await reset();
    };

    return (
        <Stack spacing="25px" sx={{ marginBottom: { lg: '175px', md: '100px', sm: '140px', xs: '80px' } }}>
            <Paragraph>Вложите инвестиции в действующий бизнес сегодня.</Paragraph>
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
                            placeholder="Введите номер телефона"
                        />
                    )}
                />
                <Button variant="green" type="submit" disabled={load} sx={{ padding: { xs: '12px 40px' } }}>
                    Заказать Звонок
                </Button>
            </Stack>
            {success && <Typography variant="body1">Заявка успешно отправлена</Typography>}
            {error && <Typography variant="body1">{error}</Typography>}
        </Stack>
    );
};

export default Form;
