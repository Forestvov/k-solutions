import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import WhiteBox from '../white-box';
import Title from '../title';

import type { FormState } from './types';
import Steep from './steep';
import { validateStep3Company, validateStep3Investor } from './validation-schema';
import { errorCatcher } from './error-catcher';
import Container from '@mui/material/Container';

const Wrapper = styled(WhiteBox)`
    max-width: 1059px;
    margin: 0 auto;
    padding: 30px 20px;

    @media (min-width: 1024px) {
        padding: 50px;
    }

    @media (min-width: 1668px) {
        padding: 60px 55px 59px;
    }
`;

const FormTitle = styled(Title)`
    max-width: 300px;

    @media (min-width: 1024px) {
        max-width: 515px;
    }
`;

const Step = styled.div`
    font-weight: 800;
    font-size: 2rem;
    line-height: 58px;
    color: #373737;
    margin-left: auto;

    @media (min-width: 1024px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1280px) {
        font-size: 2.8rem;
    }

    @media (min-width: 1668px) {
        font-size: 3rem;
    }
`;

const steps = ['ШАГ 1', 'ШАГ 2', 'ШАГ 3'];

const Register = () => {
    const [activeStep, setActiveStep] = useState(0);

    const methods = useForm<FormState>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            accountType: 'Investor',
            country: 'Russian Federation',
            phoneNumber: '',
            userName: '',
            im: '',
            companyName: '',
            fam: '',
            famCeo: '',
            numberCompany: '',
        },
    });

    const onSubmit = async (data: FormState) => {
        const formData = new FormData();

        if (data.accountType === 'Investor') {
            try {
                await validateStep3Investor.validate(data, { abortEarly: false, strict: false });
            } catch (error) {
                errorCatcher(error, methods.setError);
                return;
            }
        } else {
            try {
                await validateStep3Company.validate(data, { abortEarly: false });
            } catch (error) {
                errorCatcher(error, methods.setError);
                return;
            }
        }

        formData.append('accountType', data.accountType);
        formData.append('email', data.email);
        formData.append('userName', data.userName);
        formData.append('phoneNumber', data.phoneNumber);
        formData.append('password', data.password);
        formData.append('country', data.country);

        if (data.accountType === 'Investor') {
            formData.append('fam', data.fam);
            formData.append('im', data.im);
            formData.append('accountType', data.accountType);
        } else {
            formData.append('companyName', data.companyName);
            formData.append('numberCompany', data.numberCompany);
            formData.append('famCeo', data.famCeo);
        }

        console.log(data);
    };

    return (
        <Container sx={{ padding: '0 24px 0' }}>
            <FormProvider {...methods}>
                <Wrapper>
                    <Stack direction={{ md: 'row' }} justifyContent="space-between" alignItems={{ md: 'center' }}>
                        <FormTitle>Присоединяйтесь к KSOLUTIONS !</FormTitle>
                        <Step>{steps[activeStep]}</Step>
                    </Stack>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Steep step={activeStep} setStep={setActiveStep} />
                    </form>
                </Wrapper>
            </FormProvider>
        </Container>
    );
};

export default Register;
