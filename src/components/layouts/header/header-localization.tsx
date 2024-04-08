import styled from '@emotion/styled';
import Arrow from 'assets/header/arrow-lang.svg?react';

const Button = styled.button`
    background: transparent;
    border: none;
    font-size: 1.063rem;
    font-weight: 500;
    cursor: pointer;
    color: #494949;
    display: flex;
    align-items: baseline;
    gap: 4px;
    padding: 0;

    svg {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        margin-top: 1px;
    }

    &:hover svg {
        transform: rotate(180deg);
    }
`;

const HeaderLocalization = () => {
    return (
        <Button>
            Ru
            <Arrow />
        </Button>
    );
};

export default HeaderLocalization;
