import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import type { IHistory } from 'types/transaction';
import { fCurrency } from 'helpers/number-format';

const Wrapper = styled.div`
    padding: 50px 30px;
    background: #ffffff;

    @media (min-width: 1024px) {
        padding: 100px;
    }

    @media (min-width: 1280px) {
        padding: 130px;
    }

    @media (min-width: 1668px) {
        padding: 165px 144px;
    }
`;

export type TransactionType = 'In' | 'Out';

interface Props {
    content: IHistory;
    onClose: VoidFunction;
    transactionType?: TransactionType;
}

const Title = styled.div<{ status: 'success' | 'cancel' }>`
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    text-align: center;

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
        status === 'success'
            ? ` 
        color: #32BA7C
    `
            : `
    color: #e24c4b
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

const Success = ({ type }: { type?: TransactionType }) => {
    const { t } = useTranslation('personal');
    return (
        <Stack spacing="15px" alignItems="center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                    fill="#32BA7C"
                />
                <path
                    d="M22.334 43.5335L37.7599 58.9594C50.5359 55.5524 59.9996 43.912 59.9996 30.0004V29.1486L47.886 17.9814L22.334 43.5335Z"
                    fill="#0AA06E"
                />
                <path
                    d="M30.7573 36.7196C32.0823 38.0445 32.0823 40.3158 30.7573 41.6407L28.0129 44.3852C26.6879 45.7101 24.4166 45.7101 23.0917 44.3852L11.0728 32.2716C9.74787 30.9467 9.74787 28.6754 11.0728 27.3505L13.8173 24.606C15.1422 23.2811 17.4135 23.2811 18.7384 24.606L30.7573 36.7196Z"
                    fill="white"
                />
                <path
                    d="M41.2621 15.8042C42.587 14.4793 44.8583 14.4793 46.1833 15.8042L48.9277 18.5487C50.2527 19.8736 50.2527 22.1449 48.9277 23.4699L28.1075 44.1954C26.7826 45.5203 24.5113 45.5203 23.1864 44.1954L20.4419 41.4509C19.117 40.126 19.117 37.8547 20.4419 36.5298L41.2621 15.8042Z"
                    fill="white"
                />
            </svg>
            <Title status="success">{type === 'Out' ? t('Вывод прошел успешно') : t('Оплата прошла успешно')}</Title>
        </Stack>
    );
};

const Cancel = ({ type }: { type?: TransactionType }) => {
    const { t } = useTranslation('personal');
    return (
        <Stack spacing="15px" alignItems="center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M30.0001 59.5C46.5686 59.5 60.0001 46.0685 60.0001 29.5C60.0001 12.9315 46.5686 -0.5 30.0001 -0.5C13.4315 -0.5 0 12.9315 0 29.5C0 46.0685 13.4315 59.5 30.0001 59.5Z"
                    fill="#E24C4B"
                />
                <path
                    d="M60.0001 29.4999C60.0001 45.9999 46.5001 59.4999 30 59.4999C20.4376 59.4999 12.0001 55.1874 6.5625 48.2499C11.625 52.3749 18.1875 54.8124 25.3125 54.8124C41.8125 54.8124 55.3125 41.3125 55.3125 24.8124C55.3125 17.6875 52.875 11.125 48.75 6.0625C55.6876 11.4998 60.0001 19.9373 60.0001 29.4999Z"
                    fill="#D1403F"
                />
                <path
                    d="M43.6874 43.1874C42.5625 44.3123 40.6874 44.3123 39.5624 43.1874L29.9999 33.6249L20.4375 43.1874C19.3125 44.3123 17.4374 44.3123 16.3125 43.1874C15.1875 42.0624 15.1875 40.1873 16.3125 39.0623L25.8749 29.4999L16.3125 19.9375C15.1875 18.8125 15.1875 16.9374 16.3125 15.8125C17.4374 14.6875 19.3125 14.6875 20.4375 15.8125L29.9999 25.3749L39.5624 15.8125C40.6874 14.6875 42.5625 14.6875 43.6874 15.8125C44.8124 16.9374 44.8124 18.8125 43.6874 19.9375L34.125 29.4999L43.6874 39.0623C44.8124 40.1873 44.8124 42.0623 43.6874 43.1874Z"
                    fill="white"
                />
            </svg>
            <Title status="cancel">{type === 'Out' ? t('Вывод не прошел') : t('Оплата не прошла')}</Title>
        </Stack>
    );
};

const StatusPopup = ({ onClose, content, transactionType }: Props) => {
    const { t } = useTranslation('personal');
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
                            {content.transactionLinkType === 'Token' ? 'Crypto' : content.transactionLinkType}/
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
                            ? fCurrency(Number(content.amountOut))
                            : fCurrency(Number(content.amountIn))}
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
