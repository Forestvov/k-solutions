import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import type { SxProps, Theme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { TablePaginationProps } from '@mui/material/TablePagination';
import TablePagination from '@mui/material/TablePagination';
import type { ChangeEvent } from 'react';

// ----------------------------------------------------------------------

interface Props {
    dense?: boolean;
    onChangeDense?: (event: ChangeEvent<HTMLInputElement>) => void;
    sx?: SxProps<Theme>;
}

export default function TablePaginationCustom({
    dense,
    onChangeDense,
    rowsPerPageOptions = [5, 10, 25],
    sx,
    ...other
}: Props & TablePaginationProps) {
    return (
        <Box sx={{ position: 'relative', ...sx }}>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                {...other}
                sx={{
                    borderTopColor: 'transparent',
                }}
            />

            {onChangeDense && (
                <FormControlLabel
                    label="Dense"
                    control={<Switch checked={dense} onChange={onChangeDense} />}
                    sx={{
                        pl: 2,
                        py: 1.5,
                        top: 0,
                        position: {
                            sm: 'absolute',
                        },
                    }}
                />
            )}
        </Box>
    );
}
