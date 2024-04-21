import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import IconHot from 'assets/pages/personal/hot-filter.svg?react';

const ButtonStyled = styled(Button)<{ active?: string }>`
    display: flex;
    align-items: center;
    color: #494949;
    background: rgba(32, 131, 109, 0.2);
    border-radius: 7px;
    padding: 10px 25px;
    margin-left: 0;
    margin-right: 20px;
    margin-bottom: 20px;

    @media (min-width: 1668px) {
        margin-right: 30px;
    }

    svg {
        margin-right: 6px;
    }

    &:hover {
        color: #fff;
        background: #20836d;
    }

    ${({ active }) =>
        active &&
        `
        pointer-events: none;
        color: #fff;
        background: #20836d;
    `}
`;

const Filters = () => {
    return (
        <Stack direction="row" flexWrap="wrap" marginBottom={{ xs: '20px', md: '40px' }}>
            <ButtonStyled active="active">Все</ButtonStyled>
            <ButtonStyled>
                <IconHot />
                Горячие предложения
            </ButtonStyled>
            <ButtonStyled>Франшизы</ButtonStyled>
            <ButtonStyled>Идет сбор займа</ButtonStyled>
            <ButtonStyled>Сбор завершен</ButtonStyled>
            <ButtonStyled>Займ погашен</ButtonStyled>
        </Stack>
    );
};

export default Filters;
