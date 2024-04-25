import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import styled from '@emotion/styled';
import Title from 'components/profile/title';
import type { FC } from 'react';
import { TableHeadCustom } from 'components/shared/table';
import LogoSrc from 'assets/moc-icon.png';
import Stack from '@mui/material/Stack';

import Scrollbar from '../../shared/scrollbar';

const TitleStyled = styled(Title)`
    margin: 0 0 30px;
`;

interface RowProps {
    id: string;
    name: string;
    flag: string;
    rank: string;
    email: string;
    category: string;
    avatarUrl: string;
    totalAmount: number;
}

interface Props {
    tableData: RowProps[];
    tableLabels: any;
}

const TableStyled = styled.div`
    margin-bottom: 60px;

    thead tr th:first-of-type,
    tbody tr td:first-of-type {
        padding-left: 30px;
    }

    th {
        border: none;
    }

    td {
        border-bottom: 1px dashed rgba(224, 224, 224, 1);
    }
`;

const FinanceIncome: FC<Props> = ({ tableLabels }) => {
    return (
        <div>
            <TitleStyled>Доходы</TitleStyled>

            <TableStyled>
                <TableContainer
                    sx={{
                        overflow: 'unset',
                        margin: {
                            xs: '0 -20px',
                            sm: '0 -30px',
                        },
                        width: 'auto',
                    }}
                >
                    <Scrollbar>
                        <Table sx={{ minWidth: 1100 }}>
                            <TableHeadCustom headLabel={tableLabels} />
                            <TableBody>
                                <EcommerceBestSalesmanRow />
                                <EcommerceBestSalesmanRow />
                                <EcommerceBestSalesmanRow />
                                <EcommerceBestSalesmanRow />
                            </TableBody>
                        </Table>
                    </Scrollbar>
                </TableContainer>
            </TableStyled>
        </div>
    );
};

export default FinanceIncome;

// ----------------------------------------------------------------------

// interface EcommerceBestSalesmanRowProps {
//     row: RowProps;
// }

function EcommerceBestSalesmanRow() {
    return (
        <TableRow>
            <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack direction="row" alignItems="center" spacing="15px">
                    <img src={LogoSrc} alt="" />
                    <span>FarmTech</span>
                </Stack>
            </TableCell>

            <TableCell>07 Апрель 2022</TableCell>

            <TableCell>$50,000.00</TableCell>

            <TableCell>5% / ежедневно</TableCell>

            <TableCell>
                <Stack direction="row" alignItems="center" spacing="7px" sx={{ color: '#00A76F' }}>
                    <span>$670.00</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.35355 0.146447C4.15829 -0.0488155 3.84171 -0.0488156 3.64645 0.146447L0.464466 3.32843C0.269204 3.52369 0.269204 3.84027 0.464466 4.03553C0.659728 4.2308 0.976311 4.2308 1.17157 4.03553L4 1.20711L6.82843 4.03553C7.02369 4.2308 7.34027 4.2308 7.53553 4.03553C7.7308 3.84027 7.7308 3.52369 7.53553 3.32843L4.35355 0.146447ZM3.5 0.5L3.5 11.5L4.5 11.5L4.5 0.5L3.5 0.5Z"
                            fill="#00A76F"
                        />
                    </svg>
                </Stack>
            </TableCell>
        </TableRow>
    );
}
