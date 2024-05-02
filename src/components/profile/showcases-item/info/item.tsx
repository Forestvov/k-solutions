import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import Title from '../../title';

const Text = styled.p`
    margin: 0;
    font-weight: 300;
    font-size: 1rem;
    line-height: 24px;
    color: #4c4c4c;

    @media (min-width: 1668px) {
        font-size: 1.25rem;
    }
`;

interface Props {
    title: string;
    description: string;
}

const Item = ({ title, description }: Props) => {
    return (
        <Stack
            spacing={{ lg: '20px', xs: '10px' }}
            sx={{ paddingLeft: '25px', borderLeft: '4px solid #006838', borderRadius: '4px 0 0 4px' }}
        >
            <Title>{title}</Title>
            <Text>{description}</Text>
        </Stack>
    );
};

export default Item;
