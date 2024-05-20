import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import Steep from './step';
import type { FormState } from './types';
import { addTransaction, getTransaction, setMarkAsTransaction } from 'api/transaction';
import type { IHistory } from 'types/transaction';
import Button from '@mui/material/Button';

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

interface Props {
    onClose: VoidFunction;
    contentRow?: IHistory;
    transactionType?: 'In' | 'Out';
}

export const Form = ({ onClose, contentRow, transactionType }: Props) => {
    const { t } = useTranslation('personal');

    const [content, setContent] = useState(contentRow);
    const [currentId, setCurrentId] = useState<null | number>(null);

    const steps = [`${t('ШАГ')} 1`, `${t('ШАГ')} 2`, `${t('ШАГ')} 3`];

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
            if (
                content.transactionLinkType === 'Token' ||
                content.transactionLinkType === 'Wallet' ||
                (content.transactionLinkType === 'Bank' && content.transactionStatus === 'Process')
            ) {
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
    }, [content, methods, transactionType]);

    useEffect(() => {
        if (currentId) {
            const interval = setInterval(() => {
                getTransaction(currentId).then(({ data }) => setContent(data));
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [currentId]);

    const onSubmit = async (data: FormState) => {
        if (data.transactionLinkType === 'Bank' || data.transactionLinkType === 'Wallet') {
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
                    setCurrentId(data.transactionId);
                });

                setActiveStep(3);
            } catch (e) {
                console.log(e);
            }
        } else if (data.transactionLinkType === 'Token') {
            const newData = {
                currencyToken: data.currencyToken,
                contact: data.contact,
                amountIn: String(Number(data.amountOut) / Number(data.amountIn)),
                amountOut: data.amountOut,
                qrCode: data.qrCode,
                transactionType: transactionType,
                transactionLinkType: data.transactionLinkType,
            };

            // @ts-ignore
            await addTransaction(newData).then(({ data }) => {
                methods.setValue('transactionDate', data.transactionDate);
                methods.setValue('transactionStatus', data.transactionStatus);
                methods.setValue('transactionId', data.transactionId);
                methods.setValue('amountOut', data.amountIn);
                setCurrentId(data.transactionId);
            });

            setActiveStep(3);
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
                    setCurrentId(data.transactionId);
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

    return (
        <Wrapper>
            <TitleContent>
                <span>{transactionType === 'Out' ? t('Вывод баланса') : t('Пополнить баланс')}</span>
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
                    {activeStep === 1 && (
                        <Button
                            type="button"
                            sx={{
                                minWidth: '0',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                marginTop: '20px',
                                svg: {
                                    flex: '0 0 auto',
                                },
                            }}
                            onClick={() => setActiveStep(0)}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.8337 6.99984H1.16699M1.16699 6.99984L7.00033 12.8332M1.16699 6.99984L7.00033 1.1665"
                                    stroke="#fff"
                                    strokeWidth="1.67"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    )}
                </form>
            </FormProvider>
        </Wrapper>
    );
};
