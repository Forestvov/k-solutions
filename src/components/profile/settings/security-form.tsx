import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Title from '../title';

import type { FormStateSecurity } from './types';
import { validateSecurity } from './validations';
import Input from './input';

const SecurityForm = () => {
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

    const onSubmit = (data: FormStateSecurity) => {
        const formData = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        };

        console.log(formData);
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
                            <Input name="oldPassword" type="password" placeholder="Введите старый пароль" />
                            <Input name="repeatOldPassword" type="password" placeholder="Подвердите старый пароль" />
                        </Stack>
                        <Stack direction="row" spacing="100px" justifyContent="space-between">
                            <Input name="newPassword" type="password" placeholder="Введите новый пароль" />
                            <Input name="repeatNewPassword" type="password" placeholder="Подвердите новый пароль" />
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

export default SecurityForm;
