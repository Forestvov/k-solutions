import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { useGetAnaliticHistoryGain } from 'api/brief';
import type { IHistoryRow } from 'types/brief';

import Title from 'components/profile/title';
import { TableHeadCustom } from 'components/shared/table';
import PaginatorPage from 'components/shared/paginator-page';

import Scrollbar from '../../shared/scrollbar';
import RowSkeleton from './row-skeleton';
import { fDate } from 'helpers/format-time';
import { fCurrency, fPercent } from 'helpers/number-format';

const TitleStyled = styled(Title)`
    margin: 0 0 30px;
`;

const TableStyled = styled.div`
    margin-bottom: 60px;

    thead tr th:first-of-type,
    tbody tr td:first-of-type {
        padding-left: 30px;
    }

    th {
        border: none;
    }

    tbody tr {
        border-bottom: 1px dashed rgba(224, 224, 224, 1);
    }

    td {
        border-bottom: none;
    }
`;

const FinanceIncome = () => {
    const { t } = useTranslation('personal');

    const [page, setPage] = useState(0);
    const {
        data,
        dataLoading,
        dataEmpty,
        pageInfo: { pages, currentPage, isLast, isFirst },
    } = useGetAnaliticHistoryGain({
        page,
        pageSize: 4,
    });

    const TableLabels = [
        { id: 'name', label: t('Название компании'), width: '400px' },
        { id: 'category', label: t('Дата дохода') },
        { id: 'country', label: t('Сумма инвестиций') },
        { id: 'totalAmount', label: t('Ставка, %') },
        { id: 'rank', label: t('Сумма дохода') },
    ];

    if (dataEmpty && !dataLoading) return null;

    return (
        <div>
            <TitleStyled>{t('Доходы')}</TitleStyled>
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
                        <Table sx={{ minWidth: 1250 }}>
                            <TableHeadCustom headLabel={TableLabels} />
                            {dataLoading ? (
                                <>
                                    <RowSkeleton />
                                    <RowSkeleton />
                                    <RowSkeleton />
                                    <RowSkeleton />
                                </>
                            ) : (
                                <TableBody>
                                    {data &&
                                        data.map((row) => (
                                            <EcommerceBestSalesmanRow {...row} key={row.briefcaseAccountGainId} />
                                        ))}
                                </TableBody>
                            )}
                        </Table>
                    </Scrollbar>
                </TableContainer>
                <Box
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    <PaginatorPage
                        isFirst={isFirst}
                        isLast={isLast}
                        currentPage={currentPage}
                        countPages={pages}
                        onChange={setPage}
                    />
                </Box>
            </TableStyled>
        </div>
    );
};

export default FinanceIncome;

function EcommerceBestSalesmanRow({
    companyName,
    createdDate,
    briefcaseAccountAmount,
    percents,
    gainAmount,
    image,
    companyType,
}: IHistoryRow) {
    const { t } = useTranslation('personal');

    return (
        <TableRow>
            <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack direction="row" alignItems="center" spacing="15px">
                    <Box
                        sx={{
                            background: '#EDEDED',
                            width: '64px',
                            height: '64px',
                            borderRadius: '12px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(${image})`,
                        }}
                    />
                    <span>{companyName}</span>
                </Stack>
            </TableCell>

            <TableCell>{fDate(createdDate)}</TableCell>

            <TableCell>{briefcaseAccountAmount ? fCurrency(briefcaseAccountAmount) : '$0'}</TableCell>

            <TableCell>
                {fPercent(percents)}/ {t(companyType === 'Franchise' ? 'ежедневно' : 'Ежемесячно')}
            </TableCell>

            <TableCell>
                <Stack direction="row" alignItems="center" spacing="7px" sx={{ color: '#00A76F' }}>
                    <span>{gainAmount ? fCurrency(gainAmount) : '$0'}</span>
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
