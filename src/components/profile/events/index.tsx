import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Pagination from 'components/pagination';

import WhiteWrapper from '../white-wrapper';
import Title from '../title';
import Event from './event';

const Wrapper = styled(WhiteWrapper)`
    @media (min-width: 1668px) {
        max-width: 633px;
    }
`;

const TitleComponent = styled(Title)`
    margin: 0 0 34px 0;
`;

export const Events = () => {
    return (
        <Wrapper>
            <TitleComponent>События</TitleComponent>
            <Stack spacing="30px" sx={{ marginBottom: '30px' }}>
                <Event />
                <Event />
            </Stack>
            <Pagination />
        </Wrapper>
    );
};

export default Events;
