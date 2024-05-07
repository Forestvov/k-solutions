import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import Steep from './step';
import type { FormState } from './types';
import { addTransaction, setMarkAsTransaction } from 'api/transaction';
import type { IHistory } from 'types/transaction';

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
    content?: IHistory;
    transactionType?: 'In' | 'Out';
}

export const Form = ({ onClose, content, transactionType }: Props) => {
    const [activeStep, setActiveStep] = useState(0);

    const methods = useForm<FormState>({
        mode: 'onChange',
        defaultValues: {
            transactionLinkType: 'Token',
            currencyToken: '',
            contact: '',
            qrCode: '',
            amountIn: '',
            amountOut: '',
            transactionDate: '',
            commission: '',
            staticCurse: '',
            transactionStatus: '',
            transactionId: '',
            nameCart: '',
            numberCart: '',
            dateCart: '',
            cvvCart: '',
        },
    });

    useEffect(() => {
        if (content) {
            if (content.transactionLinkType === 'Token' && content.transactionStatus === 'Process') {
                methods.setValue('transactionDate', content.transactionDate);
                methods.setValue('transactionStatus', content.transactionStatus);
                methods.setValue('transactionId', content.transactionId);
                methods.setValue('qrCode', content.qrCode);
                methods.setValue('contact', content.contact);
                methods.setValue('currencyToken', content.currentName);
                methods.setValue('amountOut', content.amountIn);
                setActiveStep(3);
            }

            if (content.transactionLinkType === 'Visa' && content.transactionStatus === 'Process') {
                methods.setValue('transactionLinkType', 'Visa');
                setActiveStep(3);
            }

            if (content.transactionLinkType === 'p2p') {
                methods.setValue('transactionLinkType', 'p2p');

                if (content.transactionStatus === 'Wait requisites') {
                    methods.setValue('transactionDate', content.transactionDate);
                    methods.setValue('transactionStatus', content.transactionStatus);
                    methods.setValue('transactionId', content.transactionId);
                    setActiveStep(2);
                }

                if (content.transactionStatus === 'Process') {
                    methods.setValue('transactionDate', content.transactionDate);
                    methods.setValue('transactionStatus', content.transactionStatus);
                    methods.setValue('transactionId', content.transactionId);
                    methods.setValue('contact', content.contact);

                    if (transactionType === 'Out') {
                        setActiveStep(3);
                    } else {
                        setActiveStep(2);
                    }
                }

                if (content.transactionStatus === 'Marked as paid') {
                    setActiveStep(3);
                }
            }
        }
    }, [content]);

    const onSubmit = async (data: FormState) => {
        if (data.transactionLinkType === 'Token') {
            try {
                const newData = {
                    currencyToken: data.currencyToken,
                    contact: data.contact,
                    amountIn: data.amountOut,
                    amountOut: String(Number(data.amountOut) * Number(data.amountIn)),
                    qrCode: data.qrCode,
                    transactionType: transactionType,
                    transactionLinkType: data.transactionLinkType,
                };

                // @ts-ignore
                await addTransaction(newData).then(({ data }) => {
                    methods.setValue('transactionDate', data.transactionDate);
                    methods.setValue('transactionStatus', data.transactionStatus);
                    methods.setValue('transactionId', data.transactionId);
                });

                setActiveStep(3);
            } catch (e) {
                console.log(e);
            }
        } else if (data.transactionLinkType === 'p2p') {
            try {
                const newData = {
                    currencyToken: data.currencyToken,
                    amountIn: transactionType === 'Out' ? data.amountOut : data.amountIn,
                    amountOut: transactionType === 'Out' ? data.amountIn : data.amountOut,
                    qrCode: data.qrCode,
                    transactionType: transactionType,
                    transactionLinkType: data.transactionLinkType,
                    contactFrom: `${data.nameCart}::${data.numberCart}`,
                };

                await addTransaction(newData).then(({ data }) => {
                    methods.setValue('transactionDate', data.transactionDate);
                    methods.setValue('transactionStatus', data.transactionStatus);
                    methods.setValue('transactionId', data.transactionId);
                });
                if (transactionType === 'Out') {
                    setActiveStep(3);
                } else {
                    setActiveStep(2);
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const newData = {
                    currencyToken: 'Visa',
                    amountIn: data.amountIn,
                    amountOut: data.amountIn,
                    transactionType: transactionType,
                    transactionLinkType: data.transactionLinkType,
                    contactFrom: `${data.nameCart}:${data.dateCart}:${data.numberCart}:${data.cvvCart}`,
                };
                await addTransaction(newData);
                setActiveStep(3);
            } catch (e) {
                console.log(e);
            }
        }
    };

    const onSetMarkAsPaid = async () => {
        try {
            await setMarkAsTransaction(String(methods.getValues('transactionId')));
            setActiveStep(3);
        } catch (e) {
            console.log(e);
        }
    };

    console.log(methods.watch());

    return (
        <Wrapper>
            <TitleContent>
                <span>{transactionType === 'Out' ? 'Вывод баланса' : 'Пополнить баланс'}</span>
                <div>{steps[activeStep]}</div>
            </TitleContent>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Steep
                        transactionType={transactionType}
                        step={activeStep}
                        setStep={setActiveStep}
                        onSetMarkAsPaid={onSetMarkAsPaid}
                        onClose={onClose}
                    />
                </form>
            </FormProvider>
        </Wrapper>
    );
};
