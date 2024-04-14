import Icon from 'assets/header/laggout.svg?react';
import styled from '@emotion/styled';

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;

const Laggout = () => {
    return (
        <Button>
            <Icon />
        </Button>
    );
};

export default Laggout;
