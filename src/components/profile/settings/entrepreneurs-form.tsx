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
                    <Title>Смена пароля</Title>
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
                            <Input name="name" placeholder="Индивидуальный предприниматель" />
                            <Input name="fio" placeholder="Наименование компании " />
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
                            <Input name="username" placeholder="Номер компании" />
                            <Input name="email" placeholder="ФИО директора" />
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
                            <Input name="email" placeholder="Почта компании" />
                            <Input name="phoneNumber" placeholder="Номер телефона" />
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
                        Сохранить изменения
                    </Button>
                </Stack>
            </Box>
        </FormProvider>
    );
};

export default EntrepreneursForm;
