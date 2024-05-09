// import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Title from '../title';

// import { validateSecurity } from './validations';
import type { FormStateAccount } from './types';
import Input from './input';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { upadteAccount } from 'api/user';

const AccountForm = () => {
    const { t } = useTranslation('personal');

    // const resolver = yupResolver(validateSecurity);

    // @ts-ignore
    const { user } = useAuthContext();

    const methods = useForm<FormStateAccount>({
        mode: 'onChange',
        // resolver,
        defaultValues: {
            fio: user.fio.split(' ')[0] ?? '',
            name: user.fio.split(' ')[1] ?? '',
            email: user.email ?? '',
            username: user.userName ?? '',
            phoneNumber: user.numberPhone ?? '',
            country: user.country ?? '',
        },
    });

    const onSubmit = async (data: FormStateAccount) => {
        const newData = {
            id: user.id,
            fam: data.fio,
            im: data.name,
            email: data.email,
            username: data.username,
            phoneNumber: data.phoneNumber,
            country: data.country,
        };

        if (user.id) {
            // @ts-ignore
            await upadteAccount(newData);
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
                    <Title>{t('Личная информация')}</Title>
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
                            <Input name="name" placeholder={t('Имя')} />
                            <Input name="fio" placeholder={t('Фамилия')} />
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
                            <Input name="username" placeholder={t('Логин')} />
                            <Input name="email" placeholder="E-mail" />
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
                            <Input name="country" placeholder={t('Страна')} />
                            <Input name="phoneNumber" placeholder={t('Номер телефона')} />
                        </Stack>
                    </Stack>
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

export default AccountForm;
