// import { yupResolver } from '@hookform/resolvers/yup';
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
                    padding: '30px',
                }}
            >
                <Stack spacing="60px" component="form" onSubmit={methods.handleSubmit(onSubmit)}>
                    <Title>Личная информация</Title>
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
                            <Input name="name" placeholder="Имя" />
                            <Input name="fio" placeholder="Фамилия" />
                        </Stack>
                        <Stack direction="row" spacing="100px" justifyContent="space-between">
                            <Input name="username" placeholder="Логин" />
                            <Input name="email" placeholder="E-mail" />
                        </Stack>
                        <Stack direction="row" spacing="100px" justifyContent="space-between">
                            <Input name="country" placeholder="Страна" />
                            <Input name="phoneNumber" placeholder="Номер телефона" />
                        </Stack>
                    </Stack>
                    <Button
                        type="submit"
                        variant="green"
                        sx={{
                            width: '400px',
                        }}
                    >
                        Сохранить изменения
                    </Button>
                </Stack>
            </Box>
        </FormProvider>
    );
};

export default AccountForm;
