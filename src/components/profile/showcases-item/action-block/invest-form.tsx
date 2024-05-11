import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

import type { CompanyType } from 'types/company';
import { closeBrief, investBrief } from 'api/brief';
import { useCurrencyContext } from 'context/currency';
import { generatePrefixCurrency } from 'components/profile/balance/all-assets/replenish/step/currency-form';
import { returnCurrencyForm } from 'helpers/renderCurrency';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: #000;
    text-align: center;
    height: 49px;
    border-radius: 10px;
    border: 1px solid #20836d;
    width: 100%;
    padding: 0 40px;

    outline-color: #20836d;

    &::placeholder {
        color: #838383;
    }

    @media (min-width: 768px) {
        height: 59px;
    }
`;

const Prefix = styled.span`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

interface Input {
    amount: string;
}

interface Props {
    companyType: CompanyType;
    updateBrief?: VoidFunction;
    closeInvest?: boolean;
}

const InvestForm = ({ companyType, updateBrief, closeInvest = false }: Props) => {
    const { t } = useTranslation('personal');

    const { selected, currency } = useCurrencyContext();

    const [error, setError] = useState<boolean | string>(false);
    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);

    const { id } = useParams();

    const validate = yup.object().shape({
        amount: yup.number().required(t('Необходимо указать число')),
    });

    const resolver = yupResolver(validate);

    const methods = useForm<Input>({
        // @ts-ignore
        resolver,
        defaultValues: {
            amount: '',
        },
    });

    const onSubmit = async (data: Input) => {
        setLoader(true);
        setSuccess(false);
        setError(false);

        try {
            if (closeInvest) {
                await closeBrief({
                    amount: `-${returnCurrencyForm({
                        usd: Number(data.amount),
                        rub: currency.USD,
                        eur: currency.EUR,
                        currency: selected,
                    })}`,
                    briefcaseId: String(id),
                });
            } else {
                await investBrief({
                    amount: returnCurrencyForm({
                        usd: Number(data.amount),
                        rub: currency.USD,
                        eur: currency.EUR,
                        currency: selected,
                    }),
                    briefcaseId: String(id),
                });
            }

            if (updateBrief) {
                await updateBrief();
            }

            setSuccess(true);
            methods.reset();
        } catch (e) {
            // @ts-ignore
            if (e?.message === 'Amount less or more then rang of current briefcase') {
                setError(t('Указанная сумма меньше минимального взноса'));
            }
            // @ts-ignore
            if (e?.message === 'Balance is not enough for invest') {
                setError(t('Указанная сумма больше вашего баланса'));
            }
            // @ts-ignore
            if (e?.message === 'Amount bigger then invested') {
                setError(t('Сумма превышает ваши инвестиции'));
            }
        }

        setLoader(false);
    };

    return (
        <FormProvider {...methods}>
            <Stack
                component="form"
                spacing="20px"
                sx={{ marginBottom: '20px' }}
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <Wrapper>
                            <Input
                                {...methods.register('amount')}
                                onChange={onChange}
                                value={value}
                                type="number"
                                placeholder={
                                    companyType === 'Franchise'
                                        ? `${t('Введите сумму инвестиции')} (${generatePrefixCurrency(selected)})`
                                        : `${t('Введите сумму кредитования')} (${generatePrefixCurrency(selected)})`
                                }
                            />
                            {value && <Prefix>{generatePrefixCurrency(selected)}</Prefix>}
                        </Wrapper>
                    )}
                    control={methods.control}
                    name="amount"
                />
                {error && (
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '15px !important',
                            color: '#FF5630',
                        }}
                    >
                        {error}
                    </Typography>
                )}
                {success && (
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '15px !important',
                            color: '#006838',
                        }}
                    >
                        {!closeInvest
                            ? companyType === 'Franchise'
                                ? t('Вы успешно проинвестировали')
                                : t('Вы успешно прокредитовали')
                            : t('Запрос на закрытие отправлен')}
                    </Typography>
                )}
                <Button variant="dark-green" type="submit" fullWidth disabled={loader}>
                    {t('Подтвердить')}
                </Button>
            </Stack>
        </FormProvider>
    );
};

export default InvestForm;
