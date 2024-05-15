import type { FC } from 'react';
import styled from '@emotion/styled';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import FranchisesTableRow from 'components/investors/investing-in-franchises/table-row';
import { useTranslation } from 'react-i18next';

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
const FranchiseTable: FC = () => {
    const { t } = useTranslation('investor-page');

    const columns = [
        { name: t('Критерии'), width: 20 },
        { name: t('Инвестиции во франшизы_2'), width: 20 },
        { name: t('Покупка франшизы'), width: 20 },
    ];

    const list = [
        {
            title: t('Определение'),
            arg_1: t('Финансовые вложения'),
            arg_2: t('Приобретение лицензии'),
        },
        {
            title: t('Финансовые обязательства'),
            arg_1: t('Вкладывание капитала в обмен на долю прибыли'),
            arg_2: t('Начальные инвестиции, включая покупку'),
        },
        {
            title: t('Управленческие обязательства'),
            arg_1: t('Инвесторы не участвуют в управлении бизнесом'),
            arg_2: t('Активное участие в управлении'),
        },
        {
            title: t('Контроль и автономия'),
            arg_1: t('Влияние ограничивается условиями'),
            arg_2: t('Значительный контроль и автономия'),
        },
        {
            title: t('Доходность и риски'),
            arg_1: t('Стабильный пассивный доход'),
            arg_2: t('Возможность более высокой доходности'),
        },
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
