import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import Steep from './step';
import type { FormState } from './types';

const Wrapper = styled.div`
    padding: 40px 20px;
    border-radius: 18px !important;
    background: #f6f7f8;
    width: 335px;

    @media (min-width: 768px) {
        width: 700px;
    }

    @media (min-width: 1024px) {
        width: 900px;
        padding: 60px 55px;
    }

    @media (min-width: 1280px) {
        width: 1059px;
    }
`;

const TitleContent = styled.div`
    margin: 0 0 30px;
    font-weight: 800;
    font-size: 25px;
    line-height: 40px;
    color: #373737;

    @media (min-width: 768px) {
        font-size: 38px;
        line-height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 70px;
    }

    @media (min-width: 1280px) {
        font-size: 48px;
        line-height: 58px;
    }

    span {
        letter-spacing: -0.01em;
    }
`;

const steps = ['ШАГ 1', 'ШАГ 2', 'ШАГ 3'];

interface Props {
    onClose: VoidFunction;
}

export const Form = ({ onClose }: Props) => {
    const [activeStep, setActiveStep] = useState(0);

    const methods = useForm<FormState>({
        mode: 'onChange',
        defaultValues: {
            method: 'Tether TRC 20',
            price: '',
            bank: 'СБЕР БАНК',
            priceTotal: '',
            nameCart: '',
            numberCart: '',
            dateCart: '',
            cvvCart: '',
        },
    });

    console.log('watcher:', methods.watch());

    const onSubmit = async (data: FormState) => {
        console.log(data);
    };

    return (
        <Wrapper>
            <TitleContent>
                <span>Пополнить баланс</span>
                <div>{steps[activeStep]}</div>
            </TitleContent>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Steep step={activeStep} setStep={setActiveStep} onClose={onClose} />
                </form>
            </FormProvider>
        </Wrapper>
    );
};
