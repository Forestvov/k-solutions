import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { updatePasswordAccount } from 'api/user';

import Title from '../title';

import type { FormStateSecurity } from './types';
import { validateSecurity } from './validations';
import Input from './input';

const SecurityForm = () => {
    const { t } = useTranslation('personal');

    const [error, setError] = useState<boolean | string>(false);
    const [success, setSuccess] = useState(false);
    const resolver = yupResolver(validateSecurity);

    const methods = useForm<FormStateSecurity>({
        mode: 'onChange',
        resolver,
        defaultValues: {
            oldPassword: '',
            repeatOldPassword: '',
            newPassword: '',
            repeatNewPassword: '',
        },
    });

    const onSubmit = async (data: FormStateSecurity) => {
        setSuccess(false);
        setError(false);

        const formData = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        };

        try {
            await updatePasswordAccount(formData);
            methods.reset();
            setSuccess(true);
        } catch (e) {
            console.log(e);
            // @ts-ignore
            if (e.response.data.message === 'Old password not equal') {
                setError(t('Старый пароль введен неверно'));
            }
        }
    };

    return (
        <FormProvider {...methods}>
            <Box
                sx={{
                    padding: {
                        xl: '30px',
                        xs: '15px',
                    },
                }}
            >
                <Stack
                    spacing={{
                        xl: '60px',
                        xs: '30px',
                    }}
                    component="form"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <Title>{t('Смена пароля')}</Title>
                    <Stack spacing="30px">
                        <Stack
                            direction={{
                                xl: 'row',
                            }}
                            spacing={{
                                xl: '100px',
                                xs: '30px',
                            }}
                            justifyContent="space-between"
                        >
                            <Input name="oldPassword" type="password" placeholder={t('Введите старый пароль')} />
                            <Input
                                name="repeatOldPassword"
                                type="password"
                                placeholder={t('Подвердите старый пароль')}
                            />
                        </Stack>
                        <Stack
                            direction={{
                                xl: 'row',
                            }}
                            spacing={{
                                xl: '100px',
                                xs: '30px',
                            }}
                            justifyContent="space-between"
                        >
                            <Input name="newPassword" type="password" placeholder={t('Введите новый пароль')} />
                            <Input
                                name="repeatNewPassword"
                                type="password"
                                placeholder={t('Подвердите новый пароль')}
                            />
                        </Stack>
                    </Stack>
                    {error && (
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#FF5630',
                            }}
                        >
                            {error}
                        </Typography>
                    )}
                    {success && (
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#118D57',
                            }}
                        >
                            {t('Пароль изменен')}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="green"
                        sx={{
                            width: '100%',
                            maxWidth: '400px',
                        }}
                    >
                        {t('Сохранить изменения')}
                    </Button>
                </Stack>
            </Box>
        </FormProvider>
    );
};

export default SecurityForm;
