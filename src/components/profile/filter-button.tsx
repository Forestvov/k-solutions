import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const ButtonStyled = styled(Button)<{ active?: boolean }>`
    display: flex;
    align-items: center;
    color: #494949;
    background: rgba(32, 131, 109, 0.2);
    border-radius: 7px;
    padding: 10px 25px;
    flex: 0 0 auto;

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

export default ButtonStyled;
