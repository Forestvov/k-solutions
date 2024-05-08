import type { FC } from 'react';
import styled from '@emotion/styled';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import FranchisesTableRow from 'components/investors/investing-in-franchises/table-row';

const TableResponsive = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: 766px) {
        width: 100%;
    }

    @media (max-width: 420px) {
        margin: 0;
    }
`;

const list = [
    {
        title: 'Определение',
        arg_1: 'Финансовые вложения в существующий франчайзинговый бизнес для получения доли прибыли без прямого участия в управлении.',
        arg_2: 'Приобретение лицензии на открытие и управление собственным бизнесом под брендом франшизы с активным участием в управлении.',
    },
    {
        title: 'Финансовые обязательства',
        arg_1: 'Вкладывание капитала в обмен на долю прибыли.',
        arg_2: 'Начальные инвестиции, включая покупку франшизы, запуск и поддержание бизнеса.',
    },
    {
        title: 'Управленческие обязательства',
        arg_1: 'Отсутствуют. Инвесторы не участвуют в управлении бизнесом.',
        arg_2: 'Активное участие в управлении, стратегическом планировании и ежедневной операционной деятельности.',
    },
    {
        title: 'Контроль и автономия',
        arg_1: 'Ограниченный контроль. Влияние ограничивается условиями инвестиционного соглашения.',
        arg_2: 'Значительный контроль и автономия в управлении бизнесом в рамках стандартов франчайзера.',
    },
    {
        title: 'Доходность и риски',
        arg_1: 'Стабильный пассивный доход с относительно низкими рисками, зависит от общей прибыльности франшизы.',
        arg_2: 'Возможность более высокой доходности за счет прямого управления, связана с более высокими рисками управления и адаптации.',
    },
];
const FranchiseTable: FC = () => {
    const columns = [
        { name: 'Критерии', width: 20 },
        { name: 'Инвестиции во франшизы', width: 20 },
        { name: 'Покупка франшизы', width: 20 },
    ];

    return (
        <TableResponsive>
            <TableContainer style={{ borderRadius: '10px', border: '1px solid #969696' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    style={{ background: '#006838', color: 'white', textAlign: 'center' }}
                                    key={column.name}
                                >
                                    {column.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((row: any) => (
                            <FranchisesTableRow key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableResponsive>
    );
};

export default FranchiseTable;
