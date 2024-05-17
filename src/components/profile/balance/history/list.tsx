import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import PaginatorPage from 'components/shared/paginator-page';

import { useGetHistoryTransaction } from 'api/transaction';

import SkeletonBlock from './skeleton-row';

import ListRow from './list-row';

import Filters from './filters';

const StyledTable = styled(Table)`
    tr: last-of-type td {
        border-bottom: none;
    }
`;

const List = () => {
    const [page, setPage] = useState(0);
    const [filters, setFilters] = useState<Record<string, string>>({
        transactionType: '',
        transactionLinkType: '',
    });

    const {
        data,
        dataLoading,
        pageInfo: { pages, currentPage, isLast, isFirst },
        mutate,
    } = useGetHistoryTransaction({
        page,
        pageSize: 6,
        transactionLinkType: filters.transactionLinkType,
        transactionType: filters.transactionType,
    });

    useEffect(() => {
        const interval = setInterval(() => mutate(), 5000);

        return () => clearInterval(interval);
    }, []);

    const onChangeFilter = (value: Record<string, string>) => {
        setFilters(value);
        setPage(0);
    };

    return (
        <>
            <Filters filters={filters} onChangeFilter={onChangeFilter} />
            <Box
                sx={{
                    height: {
                        lg: '521px',
                        xs: '490px',
                    },
                    marginBottom: '30px',
                    marginLeft: { xs: '-20px', sm: '' },
                    marginRight: { xs: '-20px', sm: '' },
                }}
            >
                {dataLoading ? (
                    <>
                        <SkeletonBlock />
                        <SkeletonBlock />
                        <SkeletonBlock />
                        <SkeletonBlock />
                        <SkeletonBlock />
                        <SkeletonBlock />
                    </>
                ) : (
                    <Box
                        sx={{
                            borderRadius: {
                                sm: '15px',
                            },
                            border: '1px solid #E4E4E7',
                            overflow: 'hidden',
                        }}
                    >
                        <TableContainer>
                            <StyledTable sx={{ minWidth: 1435 }}>
                                <TableBody>
                                    {data.map((row) => (
                                        <ListRow row={row} key={row.transactionId} />
                                    ))}
                                </TableBody>
                            </StyledTable>
                        </TableContainer>
                    </Box>
                )}
            </Box>
            <PaginatorPage
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                countPages={pages}
                onChange={setPage}
            />
        </>
    );
};

export default List;
