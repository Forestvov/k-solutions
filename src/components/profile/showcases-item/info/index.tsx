import Stack from '@mui/material/Stack';

import Item from './item';
import styled from '@emotion/styled';

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #000;
    opacity: 0.15;
    margin: 0 30px;
`;

const Info = () => {
    return (
        <Stack spacing="30px">
            <Item />
            <Divider />
            <Item />
            <Divider />
            <Item />
            <Divider />
        </Stack>
    );
};

export default Info;
