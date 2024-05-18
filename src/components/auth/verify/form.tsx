import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import axios, { endpoints } from 'helpers/axios';
import emailSchema from 'helpers/scheme/email-schema';

import Input from 'components/auth/register/steep/input';

interface Inputs {
    email: string;
}

const Button = styled.button`
    background: #20836d;
    border: none;
    font-weight: 500;
    height: 62px;
    border-radius: 9px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
`;

const validate = yup.object().shape({
    email: emailSchema,
});

const Form = () => {
    const [success, setSuccess] = useState(false);
    const [nonFound, setNonFound] = useState(false);

    const resolver = yupResolver(validate);

    const methods = useForm<Inputs>({
        mode: 'onChange',
        resolver,
        defaultValues: {
            email: '',
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data: Inputs) => {
        setNonFound(false);
        try {
            await axios.put(`${endpoints.auth.send_verify}/${data.email}`);
            await setSuccess(true);
        } catch (e) {
            // @ts-ignore
            if (e.response.data.message === 'Access Denied') {
                setNonFound(true);
            }
        }
    };

    return (
        <FormProvider {...methods}>
            <Stack
                component="form"
                sx={{
                    margin: '30px auto 0',
                    maxWidth: '500px',
                }}
                spacing="30px"
                onSubmit={handleSubmit(onSubmit)}
            >
                {success ? (
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#118D57',
                            fontWeight: 700,
                            padding: '0 30px',
                        }}
                    >
                        Письмо отправлено на почту
                    </Typography>
                ) : (
                    <>
                        <Input name="email" type="email" placeholder="E-mail" />
                        <Button type="submit" disabled={isSubmitting}>
                            Отправить еще раз
                        </Button>

                        {nonFound && (
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#FF5630',
                                }}
                            >
                                Почта не найдена
                            </Typography>
                        )}
                    </>
                )}
            </Stack>
        </FormProvider>
    );
};

export default Form;
