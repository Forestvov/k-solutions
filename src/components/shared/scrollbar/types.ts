import type { ReactNode } from 'react';

import type { Props } from 'simplebar-react';

import type { SxProps, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export interface ScrollbarProps extends Props {
    children?: ReactNode;
    sx?: SxProps<Theme>;
}
