import { type ComponentType, type ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import type { SlideProps } from '@mui/material/Slide';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import type { TransitionProps } from '@mui/material/transitions';

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

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="left" />;
}

type TransitionType = ComponentType<TransitionProps & { children: ReactElement<any, any> }>;

const Form = () => {
    const { t } = useTranslation('form');

    const [error, setError] = useState<boolean | string>(false);
    const [load, setLoad] = useState(false);

    const [state, setState] = useState<{
        open: boolean;
        Transition: TransitionType;
    }>({
        open: false,
        Transition: Fade,
    });

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    const resolver = yupResolver(validateSubscribe);

    const { control, handleSubmit, reset } = useForm<Inputs>({
        mode: 'onChange',
        resolver,
        defaultValues: {
            phoneNumber: '',
            module: 'investors-page',
        },
    });

    const onSubmit = async (data: Inputs) => {
        setError(false);
        setLoad(true);

        try {
            await addContact(data);
        } catch (e) {
            // @ts-ignore
            if (e.response.data.message === 'This number is existed') {
                setError(t('Заявка уже отправлена'));
            }
        }

        setState({
            open: true,
            Transition: SlideTransition,
        });

        await setLoad(false);
        await reset();
    };

    return (
        <>
            <Stack spacing="25px" sx={{ marginBottom: { lg: '175px', md: '100px', sm: '140px', xs: '80px' } }}>
                <Paragraph>{t('Вложите инвестиции')}</Paragraph>
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
            </Stack>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message={error ? t('Заявка уже отправлена') : t('Ожидайте с вами свяжется специалист')}
                key={state.Transition.name}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </>
    );
};

export default Form;
