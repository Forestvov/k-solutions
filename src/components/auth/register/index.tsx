import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { useRouter } from 'context/auth/hooks/useRouter';

import WhiteBox from '../white-box';
import Title from '../title';

import type { FormState } from './types';
import Steep from './steep';
import { validateStep3Company, validateStep3Investor } from './validation-schema';
import { errorCatcher } from './error-catcher';
import { useTranslation } from 'react-i18next';

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

const Confirm = styled.div`
    font-weight: 800;
    font-size: 2rem;
    line-height: 58px;
    color: #373737;
`;

const Register = () => {
    const router = useRouter();
    const { t } = useTranslation('auth');
    // @ts-ignore
    const { register } = useAuthContext();

    const steps = [`${t('ШАГ')} 1`, `${t('ШАГ')} 2`, `${t('ШАГ')} 3`];

    const [isAllReady, setIsAllReady] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [success, setSuccess] = useState(false);

    const methods = useForm<FormState>({
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
        const formData = {};

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

        // @ts-ignore
        formData.accountType = data.accountType;
        // @ts-ignore
        formData.email = data.email;
        // @ts-ignore
        formData.userName = data.userName;
        // @ts-ignore
        formData.phoneNumber = data.phoneNumber;
        // @ts-ignore
        formData.password = data.password;
        // @ts-ignore
        formData.country = data.country;

        if (data.accountType === 'Investor') {
            // @ts-ignore
            formData.fam = data.fam;
            // @ts-ignore
            formData.im = data.im;
        } else {
            // @ts-ignore
            formData.companyName = data.companyName;
            // @ts-ignore
            formData.numberCompany = data.numberCompany;
            // @ts-ignore
            formData.famCeo = data.famCeo;
        }

        try {
            // @ts-ignore
            await register(formData);
            await setSuccess(true);
        } catch (e) {
            // @ts-ignore
            if (e.message === 'Email or username are already existed') {
                setIsAllReady(true);
            }
        }
    };

    return (
        <Container sx={{ padding: '0 24px 0' }}>
            {success ? (
                <Wrapper>
                    <Stack spacing="40px" justifyContent="center">
                        <Title>{t('Присоединяйтесь')} KSOLUTIONS !</Title>
                        <>
                            <Confirm>{t('Вы успешно зарегистрировались')}</Confirm>
                            <Button onClick={() => router.push('/login')} variant="dark-green">
                                {t('Авторизировиться')}
                            </Button>
                        </>
                    </Stack>
                </Wrapper>
            ) : (
                <FormProvider {...methods}>
                    <Wrapper>
                        <Stack direction={{ md: 'row' }} justifyContent="space-between" alignItems={{ md: 'center' }}>
                            <FormTitle>{t('Присоединяйтесь')} KSOLUTIONS !</FormTitle>
                            <Step>{steps[activeStep]}</Step>
                        </Stack>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <Steep step={activeStep} setStep={setActiveStep} isAllReady={isAllReady} />
                        </form>
                    </Wrapper>
                </FormProvider>
            )}
        </Container>
    );
};

export default Register;
