import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useCurrencyContext } from 'context/currency';

import type { IHistory } from 'types/transaction';

import { fCurrency } from 'helpers/number-format';
import { renderCurrency } from 'helpers/renderCurrency';

import SupportImage from 'assets/pages/balance/support-image.png';
import SuccessIcon from 'assets/pages/balance/success-icon.svg?react';
import CancelIcon from 'assets/pages/balance/cancel-icon.svg?react';

const Wrapper = styled.div<{ support?: boolean }>`
    padding: 50px 30px;
    background: #ffffff;

    @media (min-width: 1024px) {
        padding: 100px;

        ${({ support }) =>
            support &&
            ` 
             padding: 80px 100px 75px;
        `};
    }

    @media (min-width: 1280px) {
        padding: 130px;

        ${({ support }) =>
            support &&
            ` 
             padding: 80px 130px 75px;
        `};
    }

    @media (min-width: 1668px) {
        padding: 165px 144px;

        ${({ support }) =>
            support &&
            ` 
             padding: 80px 144px 75px;
        `};
    }
`;

export type TransactionType = 'In' | 'Out';

interface Props {
    content: IHistory;
    onClose: VoidFunction;
    transactionType?: TransactionType;
}

const Title = styled.div<{ status: 'success' | 'cancel' | 'black' }>`
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    text-align: center;

    ${({ status }) =>
        status === 'black' &&
        ` 
        color: #000000 !important;
        font-size: 32px !important;
        max-width: 656px !important;
        margin: 0 auto !important;
        line-height: 38.73px !important;
        
        @media (max-width: 768px) {
            font-size: 25px !important;
            line-height: 34.73px !important;
        }
    `};

    @media (min-width: 768px) {
        font-size: 38px;
        line-height: 58px;
    }

    @media (min-width: 1024px) {
        font-size: 40px;
    }

    @media (min-width: 1280px) {
        font-size: 44px;
    }

    @media (min-width: 1668px) {
        font-size: 48px;
    }

    ${({ status }) =>
        status === 'success' &&
        ` 
        color: #00a76f
    `};

    ${({ status }) =>
        status === 'cancel' &&
        ` 
        color: #FF5630
    `};
`;

const Label = styled.div`
    font-weight: 300;
    font-size: 17px;
    line-height: 21px;
    color: #71717a;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const Value = styled.div`
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    text-align: right;
    color: #18181b;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const TotalLabel = styled.div`
    font-size: 26px;
    line-height: 21px;
    color: #71717a;

    @media (min-width: 768px) {
        font-size: 32px;
    }
`;

const TotalValue = styled.div<{ status: 'success' | 'cancel' }>`
    font-weight: 700;
    font-size: 26px;
    line-height: 22px;
    text-align: right;

    @media (min-width: 768px) {
        font-size: 32px;
    }

    ${({ status }) =>
        status === 'success'
            ? ` 
        color: #00a76f
    `
            : `
    color: #FF5630
    `};
`;

const Image = styled.img`
    width: 311px;
    height: 311px;
    margin-left: auto !important;
    margin-right: auto !important;

    @media (max-width: 767px) {
        width: 270px;
        height: 270px;
    }
`;

const Success = ({ type }: { type?: TransactionType }) => {
    const { t } = useTranslation('personal');
    return (
        <Stack spacing="15px" alignItems="center">
            <SuccessIcon />
            <Title status="success">{type === 'Out' ? t('Вывод прошел успешно') : t('Оплата прошла успешно')}</Title>
        </Stack>
    );
};

const Cancel = ({ type }: { type?: TransactionType }) => {
    const { t } = useTranslation('personal');
    return (
        <Stack spacing="15px" alignItems="center">
            <CancelIcon />
            <Title status="cancel">{type === 'Out' ? t('Вывод не прошел') : t('Оплата не прошла')}</Title>
        </Stack>
    );
};

const StatusPopup = ({ onClose, content, transactionType }: Props) => {
    const { t } = useTranslation('personal');
    const { selected, currency } = useCurrencyContext();

    if (content.transactionStatus === 'Support') {
        return (
            <Wrapper support>
                <Stack
                    spacing="60px"
                    sx={{
                        width: {
                            lg: '1060px',
                            sm: '586px',
                            xs: '100%',
                        },
                    }}
                >
                    <Title status="black">{t('Обратитесь в поддержку по вашей заявке с контакт менеджером !')}</Title>
                    <Image src={SupportImage} alt="" />
                    <Button
                        onClick={onClose}
                        variant="black"
                        sx={{
                            background: '#373737',
                            padding: '20px',
                            width: '100%',
                            maxWidth: '586px',
                            margin: '50px auto 0 !important',
                        }}
                    >
                        {t('Закрыть')}
                    </Button>
                </Stack>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Stack
                spacing="60px"
                sx={{
                    width: {
                        sm: '586px',
                        xs: '100%',
                    },
                }}
            >
                {content.transactionStatus !== 'Canceled' ? (
                    <Success type={transactionType} />
                ) : (
                    <Cancel type={transactionType} />
                )}
                <Stack spacing="30px">
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        spacing={{
                            sm: '0',
                            xs: '5px',
                        }}
                        alignItems="baseline"
                        justifyContent="space-between"
                    >
                        <Label>{t('Платежная система')}</Label>
                        <Value>
                            {content.transactionLinkType === 'Token' ? 'Crypto' : content.transactionLinkType} /{' '}
                            {content.currentName}
                        </Value>
                    </Stack>
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        spacing={{
                            sm: '0',
                            xs: '5px',
                        }}
                        alignItems="baseline"
                        justifyContent="space-between"
                    >
                        <Label>{t('Пользователь')}</Label>
                        <Value>{content.fio}</Value>
                    </Stack>
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        spacing={{
                            sm: '0',
                            xs: '5px',
                        }}
                        alignItems="baseline"
                        justifyContent="space-between"
                    >
                        <Label>{t('ID Транзакции')}</Label>
                        <Value>{content.transactionId}</Value>
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems="baseline" justifyContent="space-between">
                    <TotalLabel>{t('Сумма')}</TotalLabel>
                    <TotalValue status={content.transactionStatus === 'Success' ? 'success' : 'cancel'}>
                        {content.transactionType === 'In'
                            ? fCurrency(
                                  renderCurrency({
                                      usd: Number(content.amountOut),
                                      rub: currency.USD,
                                      eur: currency.EUR,
                                      currency: selected,
                                  })
                              )
                            : fCurrency(
                                  renderCurrency({
                                      usd: Number(content.amountIn),
                                      rub: currency.USD,
                                      eur: currency.EUR,
                                      currency: selected,
                                  })
                              )}
                    </TotalValue>
                </Stack>
                <Button
                    onClick={onClose}
                    variant="black"
                    sx={{
                        background: '#373737',
                        padding: '20px',
                    }}
                >
                    {t('Закрыть')}
                </Button>
            </Stack>
        </Wrapper>
    );
};

export default StatusPopup;
