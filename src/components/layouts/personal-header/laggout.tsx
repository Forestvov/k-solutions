import styled from '@emotion/styled';

import Icon from 'assets/header/laggout.svg?react';

const Button = styled.button`
    background: #ffffff;
    border: none;
    cursor: pointer;
    color: #595959;
    margin-left: 104px;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    svg {
        transform: translate(4px, 1px);
    }

    &:hover {
        color: #006838;
    }
`;

const Laggout = () => {
    return (
        <Button>
            <Icon />
        </Button>
    );
};
export default Laggout;
