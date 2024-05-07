// @mui
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// ----------------------------------------------------------------------

interface TFranchiseItem {
    title: string;
    arg_1: string;
    arg_2: string;
}

interface Props {
    row: TFranchiseItem;
}
export default function FranchisesTableRow({ row }: Props) {
    const { title, arg_1, arg_2 } = row;

    return (
        <TableRow hover>
            <TableCell sx={{ whiteSpace: 'wrap' }}>{title}</TableCell>
            <TableCell sx={{ whiteSpace: 'wrap' }}>{arg_1}</TableCell>
            <TableCell sx={{ whiteSpace: 'wrap' }}>{arg_2}</TableCell>
        </TableRow>
    );
}
