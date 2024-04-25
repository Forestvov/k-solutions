// ----------------------------------------------------------------------

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface TableProps {
    dense: boolean;
    page: number;
    rowsPerPage: number;
    order: 'asc' | 'desc';
    orderBy: string;
    //
    selected: string[];
    onSelectRow: (id: string) => void;
    onSelectAllRows: (checked: boolean, newSelecteds: string[]) => void;
    //
    onResetPage: VoidFunction;
    onSort: (id: string) => void;
    onChangePage: (event: unknown, newPage: number) => void;
    onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeDense: (event: ChangeEvent<HTMLInputElement>) => void;
    onUpdatePageDeleteRow: (totalRowsInPage: number) => void;
    onUpdatePageDeleteRows: ({
        totalRowsInPage,
        totalRowsFiltered,
    }: {
        totalRowsInPage: number;
        totalRowsFiltered: number;
    }) => void;
    //
    setPage: Dispatch<SetStateAction<number>>;
    setDense: Dispatch<SetStateAction<boolean>>;
    setOrder: Dispatch<SetStateAction<'desc' | 'asc'>>;
    setOrderBy: Dispatch<SetStateAction<string>>;
    setSelected: Dispatch<SetStateAction<string[]>>;
    setRowsPerPage: Dispatch<SetStateAction<number>>;
}
