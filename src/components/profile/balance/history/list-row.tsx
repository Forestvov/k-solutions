import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { useCurrencyContext } from 'context/currency';

import type { IHistory, StatusType } from 'types/transaction';

import { fCurrency } from 'helpers/number-format';
import { renderCurrency } from 'helpers/renderCurrency';

import Replenish from 'components/profile/balance/all-assets/replenish';
import { fDate, fTime } from 'helpers/format-time';

import DotsIcon from 'assets/pages/balance/dots-icon.svg?react';

const Cell = styled(TableCell)`
    padding: 20px 30px;
`;

const Status = styled.div<{ type: StatusType }>`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    width: fit-content;
    padding: 3px 10px;
    border-radius: 40px;

    span {
        display: block;
        margin-right: 8px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }

    ${({ type }) =>
        type === 'Wait requisites' &&
        `
        background: rgba(142, 51, 255, 0.16);
        color: rgb(198, 132, 255);
        span {
            background: rgb(198, 132, 255);
        }
    `}
    ${({ type }) =>
        (type === 'Marked as paid' || type === 'Support') &&
        `
        background: rgba(0, 184, 217, 0.2);
        color: #00B8D9;
        span {
            background: #00B8D9;
        }
    `}
    ${({ type }) =>
        type === 'Success' &&
        `
        background: #D6F1E8;
        color: #007867;
        span {
            background: #00A76F;
        }
    `}
    ${({ type }) =>
        type === 'Process' &&
        `
        background: #fef9c3;
        color: #713f12;
        span {
            background: #facc15;
        }
    `}
    ${({ type }) =>
        type === 'Canceled' &&
        `
        background: #FFE4DE;
        color: #7F1D1D;
        span {
            background: #FF5630;
        }`}
`;

const Value = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #18181b;

    @media (min-width: 1668px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const Label = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #71717a;

    @media (min-width: 1668px) {
        font-size: 16px;
        line-height: 21px;
    }
`;

interface ItemProps {
    value: string;
    label: string;
}

const Item = ({ label, value }: ItemProps) => {
    return (
        <Stack spacing="3px">
            <Value>{value}</Value>
            <Label>{label}</Label>
        </Stack>
    );
};

const ListRow = ({ row }: { row: IHistory }) => {
    const { t } = useTranslation('personal');
    const { selected, currency } = useCurrencyContext();

    const {
        transactionType,
        transactionLinkType,
        transactionDate,
        transactionStatus,
        amountOut,
        amountIn,
        currentName,
    } = row;

    const generateStatus = (type: StatusType) => {
        switch (type) {
            case 'Process':
                return t('В процессе');
            case 'Success':
                return t('Успешно');
            case 'Canceled':
                return t('Отклоненна');
            case 'Marked as paid':
                return t('Оплачен');
            case 'Support':
                return t('Поддержка');
            case 'Wait requisites':
                return t('Ожидает реквизиты');
            default:
                return '';
        }
    };

    const splitDate = transactionDate.split(',')[0].split('-');
    const splitTime = transactionDate.split(',')[1].split(':');

    // @ts-ignore
    const date = [splitDate[0], Number(splitDate[1] - 1), Number(splitDate[2])];
    // @ts-ignore
    const utcData = new Date(Date.UTC(date[0], date[1], date[2], splitTime[0], splitTime[1], splitTime[2]));

    return (
        <TableRow
            sx={{
                background: '#fff',
            }}
        >
            <Cell>
                <Status type={transactionStatus}>
                    <span />
                    {generateStatus(transactionStatus)}
                </Status>
            </Cell>
            <Cell>
                <Item value={transactionType === 'In' ? t('Пополнение') : t('Вывод')} label={t('Тип транзакции')} />
            </Cell>
            <Cell>
                <Item
                    value={
                        transactionLinkType === 'Token'
                            ? `Crypto / ${currentName}`
                            : `${transactionLinkType} / ${currentName}`
                    }
                    label={t('Платежная система')}
                />
            </Cell>
            <Cell>
                {transactionType === 'Out' && transactionLinkType === 'p2p' ? (
                    <Item
                        value={fCurrency(
                            renderCurrency({
                                usd: Number(amountIn),
                                rub: currency.USD,
                                eur: currency.EUR,
                                currency: selected,
                            })
                        )}
                        label={t('Сумма транзакции')}
                    />
                ) : (
                    <Item
                        value={fCurrency(
                            renderCurrency({
                                usd: Number(amountOut),
                                rub: currency.USD,
                                eur: currency.EUR,
                                currency: selected,
                            })
                        )}
                        label={t('Сумма транзакции')}
                    />
                )}
            </Cell>
            <Cell>
                <Item value={fDate(String(utcData))} label={t('Дата транзакции')} />
            </Cell>
            <Cell>
                <Item value={fTime(String(utcData), 'HH:mm')} label={t('Время транзакции')} />
            </Cell>
            <Cell>
                <Replenish content={row} transactionType={row.transactionType}>
                    <DotsIcon />
                </Replenish>
            </Cell>
        </TableRow>
    );
};

export default ListRow;
