import type { FC, PropsWithChildren } from 'react';
import { Container as MaterialContainer } from '@mui/material';

const Container: FC<PropsWithChildren> = ({ children }) => {
    return <MaterialContainer fixed>{children}</MaterialContainer>;
};

export default Container;
