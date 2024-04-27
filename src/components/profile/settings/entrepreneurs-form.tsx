import { FormProvider, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Title from '../title';
import type { FormStateAccount } from './types';
import Input from './input';
// import { validateSecurity } from './validations';

const EntrepreneursForm = () => {
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
                            <Input name="name" placeholder="Индивидуальный предприниматель" />
                            <Input name="fio" placeholder="Наименование компании " />
                        </Stack>
                        <Stack direction="row" spacing="100px" justifyContent="space-between">
                            <Input name="username" placeholder="Номер компании" />
                            <Input name="email" placeholder="ФИО директора" />
                        </Stack>
                        <Stack direction="row" spacing="100px" justifyContent="space-between">
                            <Input name="email" placeholder="Почта компании" />
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

export default EntrepreneursForm;
