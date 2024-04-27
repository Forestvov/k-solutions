// import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Title from '../title';

// import { validateSecurity } from './validations';
import type { FormStateAccount } from './types';
import Input from './input';

const AccountForm = () => {
    // const resolver = yupResolver(validateSecurity);

    const methods = useForm<FormStateAccount>({
        mode: 'onChange',
        // resolver,
        defaultValues: {
            fio: '',
            name: '',
            email: '',
            username: '',
            phoneNumber: '',
            country: '',
        },
    });

    const onSubmit = (data: FormStateAccount) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <Box
                sx={{
                    padding: '30px',
                }}
            >
                <Stack spacing="60px" component="form" onSubmit={methods.handleSubmit(onSubmit)}>
                    <Title>Смена пароля</Title>
                    <Stack spacing="30px">
                        <Stack direction="row" spacing="100px" justifyContent="space-between">
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
