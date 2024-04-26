import styled from '@emotion/styled';
import Button from '@mui/material/Button';

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

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 34px;
`;

const Filters = () => {
    return (
        <Wrapper>
            <ButtonStyled active="active">Все</ButtonStyled>
            <ButtonStyled>Вывод</ButtonStyled>
            <ButtonStyled>Пополнение</ButtonStyled>
            <ButtonStyled>Активные P2P</ButtonStyled>
        </Wrapper>
    );
};

export default Filters;
