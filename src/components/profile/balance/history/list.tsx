import styled from '@emotion/styled';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import Scrollbar from 'components/shared/scrollbar/scrollbar';

import ListRow from './list-row';

const StyledTable = styled(Table)`
    tr: last-of-type td {
        border-bottom: none;
    }
`;

const List = () => {
    return (
        <>
            <Box
                sx={{
                    height: 521,
                    marginBottom: '30px',
                    marginLeft: { xs: '-20px', sm: '' },
                    marginRight: { xs: '-20px', sm: '' },
                }}
            >
                <TableContainer
                    sx={{
                        borderRadius: {
                            sm: '15px',
                        },
                        border: '1px solid #E4E4E7',
                        overflow: 'hidden',
                    }}
                >
                    <Scrollbar>
                        <StyledTable sx={{ minWidth: 1435 }}>
                            <TableBody>
                                <ListRow />
                                <ListRow />
                                <ListRow />
                            </TableBody>
                        </StyledTable>
                    </Scrollbar>
                </TableContainer>
            </Box>
            {/* <PaginatorPage /> */}
        </>
    );
};

export default List;
