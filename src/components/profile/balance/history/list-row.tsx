import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import type { IHistory, StatusType } from 'types/transaction';
import { fCurrency } from 'helpers/number-format';
import { fDate, fTime } from 'helpers/format-time';
import Replenish from 'components/profile/balance/all-assets/replenish';

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
        type === 'Marked as paid' &&
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
    font-size: 16px;
    line-height: 22px;
    color: #18181b;
`;

const Label = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    color: #71717a;
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
    const { transactionType, transactionLinkType, transactionDate, transactionStatus, amountOut } = row;

    const generateStatus = (type: StatusType) => {
        switch (type) {
            case 'Process':
                return 'В процессе';
            case 'Success':
                return 'Успешно';
            case 'Canceled':
                return 'Отклоненна';
            case 'Marked as paid':
                return 'Оплачен';
            case 'Wait requisites':
                return 'Ожидает реквизиты';
            default:
                return '';
        }
    };

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
                <Item value={transactionType === 'In' ? 'Пополнение' : 'Вывод'} label="Тип транзакции" />
            </Cell>
            <Cell>
                <Item value={transactionLinkType} label="Платежная система" />
            </Cell>
            <Cell>
                <Item value={fCurrency(amountOut ?? 0)} label="Сумма транзакции" />
            </Cell>
            <Cell>
                <Item value={fDate(transactionDate)} label="Дата транзакции" />
            </Cell>
            <Cell>
                <Item value={fTime(transactionDate)} label="Время транзакции" />
            </Cell>
            <Cell>
                <Replenish content={row}>
                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3V1ZM2.01 3C2.56228 3 3.01 2.55228 3.01 2C3.01 1.44772 2.56228 1 2.01 1V3ZM9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3V1ZM9.01 3C9.56228 3 10.01 2.55228 10.01 2C10.01 1.44772 9.56228 1 9.01 1V3ZM16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3V1ZM16.01 3C16.5623 3 17.01 2.55228 17.01 2C17.01 1.44772 16.5623 1 16.01 1V3ZM2 2V4C3.10457 4 4 3.10457 4 2H2ZM2 2H0C0 3.10457 0.89543 4 2 4V2ZM2 2V0C0.89543 0 0 0.89543 0 2H2ZM2 2H4C4 0.89543 3.10457 0 2 0V2ZM9 2V4C10.1046 4 11 3.10457 11 2H9ZM9 2H7C7 3.10457 7.89543 4 9 4V2ZM9 2V0C7.89543 0 7 0.89543 7 2H9ZM9 2H11C11 0.89543 10.1046 0 9 0V2ZM16 2V4C17.1046 4 18 3.10457 18 2H16ZM16 2H14C14 3.10457 14.8954 4 16 4V2ZM16 2V0C14.8954 0 14 0.89543 14 2H16ZM16 2H18C18 0.89543 17.1046 0 16 0V2ZM2 3H2.01V1H2V3ZM9 3H9.01V1H9V3ZM16 3H16.01V1H16V3Z"
                            fill="#A1A1AA"
                        />
                    </svg>
                </Replenish>
            </Cell>
        </TableRow>
    );
};

export default ListRow;
