import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import { endpoints } from 'helpers/axios';
import { HOST_API } from '../../../config-global';

import Input from 'components/auth/login/input';
import Button from 'components/auth/login/button';

import ToAuth from './to-auth';

const FormStyles = styled.form`
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
`;

const ErrorMessage = styled.div`
    text-align: center;
    color: #ff5630;
`;

const Confirm = styled.div`
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 38px;
    color: #373737;
    text-align: center;
    max-width: 540px;
    margin: 0 auto !important;
`;

interface Props {
    token: string | undefined;
}

interface Inputs {
    email: string;
    password: string;
}

const Form = ({ token }: Props) => {
    // @ts-ignore
    const { t } = useTranslation('auth');

    const [success, setSuccess] = useState(false);
    const [showError, setShowError] = useState<boolean | string>(false);

    // const resolver = yupResolver(validateRestore);

    const methods = useForm<Inputs>({
        mode: 'onChange',
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
            if (token) {
                await axios.put(
                    `${HOST_API}/${endpoints.auth.restorePassword}/${data.password}`,
                    {},
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
            } else {
                await axios.put(`${HOST_API}/${endpoints.auth.restore}/${data.email}`);
            }
            setSuccess(true);
        } catch (e) {
            // @ts-ignore
            if (e.response.data.message === 'Not verified') {
                setShowError(t('Аккаунт не подтвержден'));
            }
            reset();
        }
    };

    if (token) {
        return success ? (
            <Stack spacing="40px" justifyContent="center">
                <Confirm>{t('Вы успешно изменили свой пароль.')}</Confirm>
                <ToAuth />
            </Stack>
        ) : (
            <FormProvider {...methods}>
                <FormStyles onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing="20px">
                        <Stack
                            spacing={{
                                xs: '30px',
                            }}
                        >
                            <Stack spacing="20px">
                                <Input name="password" type="password" placeholder="password" />
                            </Stack>
                            <Stack
                                direction={{
                                    md: 'row',
                                }}
                                spacing={{
                                    xs: '20px',
                                }}
                            >
                                <Button variation="fill" type="submit" disabled={isSubmitting}>
                                    {t('Восстановить пароль')}
                                </Button>
                            </Stack>
                            {showError && <ErrorMessage>{showError}</ErrorMessage>}
                        </Stack>
                    </Stack>
                </FormStyles>
            </FormProvider>
        );
    }

    return success ? (
        <Stack spacing="40px" justifyContent="center">
            <Confirm>
                {t('Мы отправили письмо вам на почту. Перейдите по ссылке чтобы восстановить свой пароль.')}
            </Confirm>
        </Stack>
    ) : (
        <FormProvider {...methods}>
            <FormStyles onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="20px">
                    <Stack
                        spacing={{
                            xs: '30px',
                        }}
                    >
                        <Stack spacing="20px">
                            <Input name="email" type="email" placeholder="E-mail" />
                        </Stack>
                        <Stack
                            direction={{
                                md: 'row',
                            }}
                            spacing={{
                                xs: '20px',
                            }}
                        >
                            <Button variation="fill" type="submit" disabled={isSubmitting}>
                                {t('Восстановить пароль')}
                            </Button>
                        </Stack>
                        {showError && <ErrorMessage>{showError}</ErrorMessage>}
                    </Stack>
                    <ToAuth />
                </Stack>
            </FormStyles>
        </FormProvider>
    );
};

export default Form;
