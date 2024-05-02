import React from 'react';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import type { IDescription } from 'types/company';

import Item from './item';

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #000;
    opacity: 0.15;
    margin: 0 30px;
`;

interface Props {
    list: IDescription[];
}

const Info = ({ list }: Props) => {
    return (
        <Stack spacing="30px">
            {list.map((item) => (
                <React.Fragment key={item.id}>
                    <Item title="" description={item.descriptions} />
                    <Divider />
                </React.Fragment>
            ))}
        </Stack>
    );
};

export default Info;
