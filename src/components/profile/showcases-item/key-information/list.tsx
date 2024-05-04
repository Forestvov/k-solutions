import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Item from './item';

interface Row {
    label: string;
    value: string | number;
}

interface Props {
    firstRow: Row[];
    secondRow: Row[];
}

const List = ({ secondRow, firstRow }: Props) => {
    return (
        <Stack
            justifyContent={{
                xs: 'space-between',
            }}
            spacing={{
                lg: '45px',
                xs: '20px',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridGap: '20px',
                    gridTemplateColumns: { xl: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                }}
            >
                {firstRow.map((row, idx) => (
                    <Item label={row.label} value={row.value} key={idx} />
                ))}
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridGap: '20px',
                    gridTemplateColumns: { xl: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                }}
            >
                {secondRow.map((row, idx) => (
                    <Item label={row.label} value={row.value} key={idx} />
                ))}
            </Box>
        </Stack>
    );
};

export default List;
