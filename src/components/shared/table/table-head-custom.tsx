import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import type { SxProps, Theme } from '@mui/material/styles';
import TableSortLabel from '@mui/material/TableSortLabel';
import type { ChangeEvent } from 'react';

// ----------------------------------------------------------------------

const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
} as const;

// ----------------------------------------------------------------------

interface Props {
    order?: 'asc' | 'desc';
    orderBy?: string;
    headLabel: any[];
    rowCount?: number;
    numSelected?: number;
    onSort?: (id: string) => void;
    onSelectAllRows?: (checked: boolean) => void;
    sx?: SxProps<Theme>;
}

export default function TableHeadCustom({
    order,
    orderBy,
    rowCount = 0,
    headLabel,
    numSelected = 0,
    onSort,
    onSelectAllRows,
    sx,
}: Props) {
    return (
        <TableHead sx={{ background: '#F4F6F8', ...sx }}>
            <TableRow>
                {onSelectAllRows && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={!!numSelected && numSelected < rowCount}
                            checked={!!rowCount && numSelected === rowCount}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => onSelectAllRows(event.target.checked)}
                        />
                    </TableCell>
                )}

                {headLabel.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align || 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{
                            width: headCell.width,
                            minWidth: headCell.minWidth,
                            color: '#637381',
                            fontWeight: 600,
                            fontSize: '14px',
                        }}
                    >
                        {onSort ? (
                            <TableSortLabel
                                hideSortIcon
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => onSort(headCell.id)}
                            >
                                {headCell.label}

                                {orderBy === headCell.id ? (
                                    <Box sx={{ ...visuallyHidden }}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : (
                            headCell.label
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
