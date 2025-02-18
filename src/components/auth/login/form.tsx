import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import validateAuth from 'helpers/validation/validateAuth';

import type { Inputs } from './types';

import Input from './input';
import ToRegister from './to-register';
import Button from './button';
import ToRestorePassword from './to-restore-password';

const FormStyles = styled.form`
    max-width: 600px;
    margin: 0 auto;
`;

const ErrorMessage = styled.div`
    text-align: center;
    color: #ff5630;
`;

const Form = () => {
    // @ts-ignore
    const { login } = useAuthContext();
    const { t } = useTranslation('auth');

    const [showError, setShowError] = useState<boolean | string>(false);
    const resolver = yupResolver(validateAuth);

    const methods = useForm<Inputs>({
        mode: 'onChange',
        resolver,
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const {
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data: Inputs) => {
        setShowError(false);

        try {
            await login(data.email, data.password);
        } catch (e) {
            // @ts-ignore
            if (e.response.data.message === 'Not verified') {
                setShowError(t('Аккаунт не подтвержден'));
            }
            // @ts-ignore
            if (e.response.data.message === 'Access Denied') {
                setShowError(t('Почта или пароль введены неверно'));
            }
            reset();
        }
    };

    return (
        <FormProvider {...methods}>
            <FormStyles onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="30px">
                    <Stack
                        spacing={{
                            md: '60px',
                            xs: '30px',
                        }}
                    >
                        <Stack spacing="30px">
                            <Input name="email" type="email" placeholder="E-mail" />
                            <Input name="password" type="password" placeholder={t('Пароль')} />
                        </Stack>
                        <Stack
                            direction={{
                                md: 'row',
                            }}
                            spacing={{
                                xs: '20px',
                                md: '30px',
                            }}
                        >
                            <ToRegister />
                            <Button variation="fill" type="submit" disabled={isSubmitting}>
                                {t('Войти')}
                            </Button>
                        </Stack>
                        {showError && <ErrorMessage>{showError}</ErrorMessage>}
                    </Stack>
                    <ToRestorePassword />
                </Stack>
            </FormStyles>
        </FormProvider>
    );
};

export default Form;
