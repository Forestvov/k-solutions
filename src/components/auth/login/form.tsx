import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

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

const Form = () => {
    const resolver = yupResolver(validateAuth);

    const methods = useForm<Inputs>({
        resolver,
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: Inputs) => {
        alert(JSON.stringify(data));
    };

    return (
        <FormProvider {...methods}>
            <FormStyles onSubmit={methods.handleSubmit(onSubmit)}>
                <Stack spacing="30px">
                    <Stack spacing="60px">
                        <Stack spacing="30px">
                            <Input name="email" type="email" placeholder="E-mail" />
                            <Input name="password" type="password" placeholder="Пароль" />
                        </Stack>
                        <Stack direction="row" spacing="30px">
                            <ToRegister />
                            <Button variation="fill" type="submit">
                                Войти
                            </Button>
                        </Stack>
                    </Stack>
                    <ToRestorePassword />
                </Stack>
            </FormStyles>
        </FormProvider>
    );
};

export default Form;
