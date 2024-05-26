import type { ComponentType, ReactElement } from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';

import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import type { SlideProps } from '@mui/material/Slide';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import type { TransitionProps } from '@mui/material/transitions';

import validateSubscribe from 'helpers/validation/validateSubscribe';

import { addContact } from 'api/order-contact';

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

    @media (min-width: 1668px) {
        height: 59px;
        line-height: 59px;
        max-width: 477px;
    }
`;

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="left" />;
}

type TransitionType = ComponentType<TransitionProps & { children: ReactElement<any, any> }>;

const SubscribeForm = () => {
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
            module: 'personal-page',
        },
    });

    const onSubmit = async (data: Inputs) => {
        setError(false);
        setLoad(true);

        try {
            await addContact(data);
            setState({
                open: true,
                Transition: SlideTransition,
            });
        } catch (e) {
            // @ts-ignore
            if (e.response.data.message === 'This number is existed') {
                setError(t('Заявка уже отправлена'));
            }
        }

        await setLoad(false);
        await reset();
    };
    return (
        <>
            <Stack spacing="20px">
                <Stack
                    direction={{ xl: 'row', md: 'column', sm: 'row' }}
                    spacing={{ xl: '30px', md: '20px', xs: '20px' }}
                    alignItems={{ xl: 'center' }}
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
                    <Button
                        variant="green"
                        type="submit"
                        disabled={load}
                        sx={{
                            width: { lg: '278px' },
                            flex: '0 0 auto',
                            padding: {
                                lg: '20px 45px',
                                md: '16px 20px',
                            },
                        }}
                    >
                        {t('Заказать Консультацию')}
                    </Button>
                </Stack>
                {error && <Typography variant="body1">{error}</Typography>}
            </Stack>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message={t('Ожидайте с вами свяжется специалист')}
                key={state.Transition.name}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </>
    );
};

export default SubscribeForm;
