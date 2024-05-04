import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import type { CompanyType } from 'types/company';
import { closeBrief, investBrief } from 'api/brief';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

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
    const [error, setError] = useState<boolean | string>(false);
    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);

    const { id } = useParams();

    const validate = yup.object().shape({
        amount: yup.number().required('Необходимо указать число'),
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
                    amount: `-${data.amount}`,
                    briefcaseId: String(id),
                });
            } else {
                await investBrief({
                    amount: data.amount,
                    briefcaseId: String(id),
                });
            }

            if (companyType === 'Franchise' && updateBrief) {
                await updateBrief();
            }

            setSuccess(true);
            methods.reset();
        } catch (e) {
            // @ts-ignore
            if (e?.message === 'Amount less or more then rang of current briefcase') {
                setError('Указанная сумма меньше минимального взноса');
            }
            // @ts-ignore
            if (e?.message === 'Balance is not enough for invest') {
                setError('Указанная сумма больше вашего баланса');
            }
            // @ts-ignore
            if (e?.message === 'Amount bigger then invested') {
                setError('Сумма превышает ваши инвестиции');
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
                                type="text"
                                placeholder={
                                    companyType === 'Franchise'
                                        ? 'Введите сумму инвестиции ($)'
                                        : 'Введите сумму кредитования ($)'
                                }
                            />
                            {value && <Prefix>$</Prefix>}
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
                                ? 'Вы успешно проинвестировали'
                                : 'Вы успешно прокредитовали'
                            : 'Запрос на закрытие отправлен'}
                    </Typography>
                )}
                <Button variant="dark-green" type="submit" fullWidth disabled={loader}>
                    Подтвердить
                </Button>
            </Stack>
        </FormProvider>
    );
};

export default InvestForm;
