import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useGetAnaliticHistoryGain } from 'api/brief';

import Title from 'components/profile/title';
import { useResponsive } from 'components/shared/chart/use-responsive';
import { TableHeadCustom } from 'components/shared/table';
import PaginatorPage from 'components/shared/paginator-page';

import Scrollbar from '../../shared/scrollbar';
import RowSkeleton from './row-skeleton';
import EcommerceBestSalesmanRow from './ecommerce-best-salesman-row';
import EcommerceBestSalesmanBlock from './ecommerce-best-salesman-block';
import BlockSkeletonSalesman from './block-skeleton-salesman';

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
    const xlDown = useResponsive('down', 'xl');
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

            {xlDown ? (
                <>
                    {dataLoading ? (
                        <Stack
                            spacing="30px"
                            sx={{
                                mb: '40px',
                            }}
                        >
                            <BlockSkeletonSalesman />
                            <BlockSkeletonSalesman />
                            <BlockSkeletonSalesman />
                            <BlockSkeletonSalesman />
                        </Stack>
                    ) : (
                        <Stack
                            spacing="30px"
                            sx={{
                                mb: '40px',
                            }}
                        >
                            {data &&
                                data.map((row) => (
                                    <EcommerceBestSalesmanBlock {...row} key={row.briefcaseAccountGainId} />
                                ))}
                        </Stack>
                    )}
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
                </>
            ) : (
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
                            <Table sx={{ minWidth: 1000 }}>
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
            )}
        </div>
    );
};

export default FinanceIncome;
