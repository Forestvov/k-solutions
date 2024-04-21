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

const Item = () => {
    return (
        <Stack
            spacing={{ lg: '20px', xs: '10px' }}
            sx={{ paddingLeft: '25px', borderLeft: '4px solid #006838', borderRadius: '4px 0 0 4px' }}
        >
            <Title>Проблема</Title>
            <Text>
                Как арендодатель, вы должны каждый год заполнять налоговые декларации. Заплатите дипломированному
                бухгалтеру ~1000 евро или больше, отсканируйте каждую квитанцию и загрузите в облако. Затем вы ждете 2
                месяца, чтобы узнать сумму налога, которую вы должны заплатить.
            </Text>
        </Stack>
    );
};

export default Item;
